import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios'
import { CallbackMsgData } from '@/libs/wxPlat/comment';
import { AuthBackQueryDto } from './dto/wxPlat.dto';

@Injectable()
export class ServerService {
  constructor(
  ) {
  }

  /**
   * 给服务发送回调消息
   * @returns
   */
  async sendCallbackMsg(url: string, appId: string, msg: CallbackMsgData) {
    try {
      const result = await axios.post<any>(url, {
        appId,
        ...msg,
      })

      Logger.debug('sendCallbackMsg---result', result.data)

      return result.data
    }
    catch (error) {
      Logger.error(
        '------ Error wxPlat sendCallbackMsg: ------',
        error,
      )
      return null
    }
  }

  /**
   * 给服务发送授权消息
   * @returns
   */
  async sendAuthBack(url: string, data: AuthBackQueryDto & {
    stat: string
  }): Promise<boolean> {
    try {
      const result = await axios.post<string>(url, data)
      return result.data === 'success'
    }
    catch (error) {
      Logger.debug('sendAuthBack---error', error)
      return false
    }
  }
}
