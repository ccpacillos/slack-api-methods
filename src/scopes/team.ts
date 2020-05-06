import request from 'src/lib/request';

export default {
  info: async (token: string) =>
    request({
      method: 'get',
      path: 'team.info',
      token,
    }),
};
