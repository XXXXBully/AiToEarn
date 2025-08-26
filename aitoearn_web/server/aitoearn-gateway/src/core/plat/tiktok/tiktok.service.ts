import { Injectable } from '@nestjs/common'
import { PlatTiktokNatsApi } from 'src/transports/plat/tiktok.natsApi'
import { AppException } from '@/common/exceptions'

@Injectable()
export class TiktokService {
  constructor(private readonly platTiktokNatsApi: PlatTiktokNatsApi) {}

  /**
   * 上传视频文件
   * @param uploadUrl 上传URL
   * @param file 文件对象
   * @param contentType 内容类型
   * @returns
   */
  async uploadVideoFile(
    uploadUrl: string,
    file: Express.Multer.File,
    contentType: string,
  ) {
    // file转换为base64
    const { buffer } = file
    const base64 = buffer.toString('base64')

    const { code, data, message }
      = await this.platTiktokNatsApi.uploadVideoFile(
        uploadUrl,
        base64,
        contentType,
      )
    if (code)
      throw new AppException(code, message)

    return data
  }

  /**
   * 检查账号状态
   * @param accountId 账号ID
   * @returns
   */
  async checkAccountStatus(accountId: string) {
    try {
      const result = await this.platTiktokNatsApi.getCreatorInfo(accountId)
      return !!result.data
    }
    catch (error) {
      return false
    }
  }

  /**
   * 处理TikTok Webhook事件
   * @param event Webhook事件数据
   * @returns
   */
  async handleWebhookEvent(event: any) {
    try {
      // 处理事件逻辑
      return await this.platTiktokNatsApi.handleWebhookEvent(event)
    }
    catch (error) {
      throw new AppException(500, '处理Webhook事件失败')
    }
  }
}
