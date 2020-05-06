import request from 'src/lib/request';

export default {
  revoke: async (token: string) =>
    request({
      method: 'get',
      params: { token },
      path: 'auth.revoke',
    }),
};
