import request from 'src/lib/request';
import snakeCaseObject from 'src/lib/snakeCaseObject';

export default {
  open: async (opts: { token: string; triggerId: string; view: any }) =>
    request({
      method: 'post',
      path: 'views.open',
      data: snakeCaseObject(opts),
      token: opts.token,
    }),

  update: async (opts: {
    token: string;
    view: any;
    externalId?: string;
    hash?: string;
    viewId?: string;
  }) =>
    request({
      method: 'post',
      path: 'views.update',
      data: snakeCaseObject(opts),
      token: opts.token,
    }),

  publish: async (opts: {
    token: string;
    userId: string;
    view: any;
    hash: string;
  }) =>
    request({
      method: 'post',
      path: 'views.publish',
      data: snakeCaseObject(opts),
      token: opts.token,
    }),
};
