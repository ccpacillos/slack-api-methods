import qs from 'qs';
import request from 'src/lib/request';

export default {
  accessV2: async (opts: {
    code: string;
    redirectUri?: string;
    clientId: string;
    clientSecret: string;
  }) =>
    request({
      method: 'post',
      auth: {
        username: opts.clientId,
        password: opts.clientSecret,
      },
      data: qs.stringify({
        code: opts.code,
        redirect_uri: opts.redirectUri,
      }),
      path: 'oauth.v2.access',
    }),
};
