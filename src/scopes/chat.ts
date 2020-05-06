import request from 'src/lib/request';
import snakeCaseObject from 'src/lib/snakeCaseObject';

export default {
  postMessage: async (
    opts: {
      token: string;
      channel: string;
      text?: string;
      asUser?: boolean;
      attachments?: any;
      blocks?: any;
      iconEmoji?: string;
      iconUrl?: string;
      linkNames?: boolean;
      mrkdwn?: boolean;
      parse?: string;
      replyBroadcast?: boolean;
      threadTs?: string;
      unfurlLinks?: boolean;
      unfurlMedia?: boolean;
      username?: string;
    },
    url?: string,
  ) =>
    request({
      method: 'post',
      path: 'chat.postMessage',
      data: snakeCaseObject(opts),
      token: opts.token,
      url,
    }),

  delete: async (opts: {
    token: string;
    channel: string;
    ts: string;
    asUser?: boolean;
  }) =>
    request({
      method: 'post',
      path: 'chat.delete',
      data: snakeCaseObject(opts),
      token: opts.token,
    }),

  update: async (opts: {
    token: string;
    channel: string;
    ts: string;
    text?: string;
    asUser?: boolean;
    attachments?: any;
    blocks?: any;
    linkNames?: boolean;
    parse?: string;
  }) =>
    request({
      method: 'post',
      path: 'chat.update',
      data: snakeCaseObject(opts),
      token: opts.token,
    }),

  postEphemeral: async (
    opts: {
      token: string;
      attachments?: any;
      channel: string;
      text?: string;
      user: string;
      asUser?: boolean;
      blocks?: any;
      iconEmoji?: string;
      iconUrl?: string;
      linkNames?: boolean;
      replyBroadcast?: boolean;
      threadTs?: string;
      username?: string;
    },
    url?: string,
  ) =>
    request({
      method: 'post',
      path: 'chat.postEphemeral',
      data: snakeCaseObject(opts),
      token: opts.token,
      url,
    }),
};
