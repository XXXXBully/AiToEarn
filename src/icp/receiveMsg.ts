// 接收主进程发来的消息
import { SendChannelEnum } from '../../commont/UtilsEnum';
import { PublishProgressRes } from '../../electron/main/plat/pub/PubItemVideo';
import IpcRendererEvent = Electron.IpcRendererEvent;
import { AccountModel } from '../../electron/db/models/account';

// 绑定事件中间层方法
const bindEventCore = (
  channel: SendChannelEnum,
  listener: (event: IpcRendererEvent, ...args: any[]) => void,
): (() => void) => {
  const e = window.ipcRenderer.on(channel, listener);
  // @ts-ignore
  const events: any[] = e._events[channel];
  if (!events) return () => {};
  let f: any;
  if (events instanceof Array) {
    f = events[events.length === 0 ? 0 : events.length - 1];
  } else {
    f = events;
  }
  return () => {
    if (f) {
      window.ipcRenderer.off(channel, f);
    }
  };
};

// ----------------------- 应用 ---------------------------

export const onInteractionProgress = (callback: (...args: any[]) => void) => {
  return bindEventCore(SendChannelEnum.InteractionProgress, (e, ...args) => {
    callback(...args);
  });
};

// 账户登录完成
export const onAccountLoginFinish = (
  callback: (account: AccountModel) => void,
) => {
  return bindEventCore(
    SendChannelEnum.AccountLoginFinish,
    (e, account: AccountModel) => {
      callback(account);
    },
  );
};

// 视频审核完成
export const onVideoAuditFinish = (
  callback: (_: { previewVideoLink: string; dataId: string }) => void,
) => {
  return bindEventCore(SendChannelEnum.VideoAuditFinish, (_, ...args) => {
    // @ts-ignore
    callback(...args);
  });
};

// 视频发布进度
export const onVideoPublishProgress = (
  callback: (progressData: PublishProgressRes) => void,
) => {
  return bindEventCore(
    SendChannelEnum.VideoPublishProgress,
    (_, progressData) => {
      callback(progressData);
    },
  );
};

// 图文发布进度
export const onImgTextPublishProgress = (
  callback: (progressData: PublishProgressRes) => void,
) => {
  return bindEventCore(
    SendChannelEnum.ImgTextPublishProgress,
    (_, progressData) => {
      callback(progressData);
    },
  );
};
