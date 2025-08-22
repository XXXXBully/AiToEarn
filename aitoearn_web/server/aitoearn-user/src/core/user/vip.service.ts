import { User, UserVipCycleType } from '@libs/database/schema'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import dayjs from 'dayjs'
import { Model } from 'mongoose'
import { AppException } from '@/common'
import { ExceptionCode } from '@/common/enums/exception-code.enum'

@Injectable()
export class VipService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) { }

  private vipAddExpireTime(userVipCycleType: UserVipCycleType): {
    num: number
    type: 'day' | 'month' | 'year'
  } {
    switch (userVipCycleType) {
      case UserVipCycleType.EXPERIENCE:
        return {
          num: 7,
          type: 'day',
        }
      case UserVipCycleType.MONTH:
        return {
          num: 1,
          type: 'month',
        }
      case UserVipCycleType.YEAR:
        return {
          num: 12,
          type: 'month',
        }
      default:
        return {
          num: 0,
          type: 'day',
        }
    }
  }

  /**
   * 设置会员信息
   * @param userId
   * @param userVipCycleType
   */
  async setVipInfo(
    userId: string,
    userVipCycleType: UserVipCycleType,
  ): Promise<boolean> {
    // 1. 查询会员信息
    const user = await this.userModel.findOne({
      _id: userId,
    })
    if (!user)
      throw new AppException(ExceptionCode.UserNotFound)

    const addInfo = this.vipAddExpireTime(userVipCycleType)

    // 根据充值的时间类型决定过期时间
    const expireTime = dayjs().add(
      addInfo.num,
      addInfo.type,
    )

    // 2. 没有会员信息或者已经过期，设置会员信息
    if (!user.vipInfo || user.vipInfo.expireTime < new Date()) {
      user.vipInfo = {
        cycleType: userVipCycleType,
        expireTime: expireTime.toDate(),
      }
    }
    else {
      // 3. 续费会员
      user.vipInfo.cycleType = userVipCycleType
      // 从用户会员信息的续费时间开始计算
      const tartTime = user.vipInfo.expireTime
      user.vipInfo.expireTime = dayjs(tartTime)
        .add(
          addInfo.num,
          addInfo.type,
        )
        .toDate()
    }

    const res = await this.userModel.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          vipInfo: user.vipInfo,
        },
      },
    )

    return res.modifiedCount > 0
  }
}
