import request from 'src/lib/request';
import snakeCaseObject from 'src/lib/snakeCaseObject';

export default {
  info: async (opts: {
    token: string;
    channel: string;
    includeLocale?: boolean;
    includeNumMembers?: boolean;
  }) =>
    request({
      method: 'get',
      params: snakeCaseObject(opts),
      path: 'conversations.info',
      token: opts.token,
    }),
};
