import request from 'src/lib/request';

export default {
  list: async (opts: { token: string; cursor?: string }) =>
    request({
      method: 'get',
      params: { cursor: opts.cursor },
      token: opts.token,
      path: 'users.list',
    }),

  info: async (opts: { token: string; user: string }) =>
    request({
      method: 'get',
      params: { user: opts.user },
      token: opts.token,
      path: 'users.info',
    }),
};
