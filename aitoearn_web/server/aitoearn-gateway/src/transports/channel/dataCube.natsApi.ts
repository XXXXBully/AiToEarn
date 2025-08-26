import { Injectable } from '@nestjs/common'
import { NatsApi } from '../api'
import { BaseNatsApi } from '../base.natsApi'
import {
  ChannelAccountDataBulk,
  ChannelAccountDataCube,
  ChannelArcDataBulk,
  ChannelArcDataCube,
} from './common'

@Injectable()
export class DataCubeNatsApi extends BaseNatsApi {
  /**
   * 获取账号数据
   * @returns
   */
  async getAccountDataCube(accountId: string) {
    const res = await this.sendMessage<ChannelAccountDataCube>(
      NatsApi.channel.dataCube.getAccountDataCube,
      {
        accountId,
      },
    )
    return res
  }

  /**
   * 获取账号增量数据
   * @returns
   */
  async getAccountDataBulk(accountId: string) {
    const res = await this.sendMessage<ChannelAccountDataBulk>(
      NatsApi.channel.dataCube.getAccountDataBulk,
      {
        accountId,
      },
    )
    return res
  }

  /**
   * 获取账号下的作品数据
   * @param accountId
   * @param dataId
   * @returns
   */
  async getArcDataCube(accountId: string, dataId: string) {
    const res = await this.sendMessage<ChannelArcDataCube>(
      NatsApi.channel.dataCube.getArcDataCube,
      {
        accountId,
        dataId,
      },
    )
    return res
  }

  /**
   * 获取账号下的作品增量数据
   * @param accountId
   * @param dataId
   * @returns
   */
  async getArcDataBulk(accountId: string, dataId: string) {
    const res = await this.sendMessage<ChannelArcDataBulk>(
      NatsApi.channel.dataCube.getArcDataBulk,
      {
        accountId,
        dataId,
      },
    )
    return res
  }
}
