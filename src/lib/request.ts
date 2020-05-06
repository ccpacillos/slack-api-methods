import axios, { AxiosBasicCredentials } from 'axios';

export const origin = 'https://slack.com/api';

export default async function (opts: {
  method: 'get' | 'post';
  auth?: AxiosBasicCredentials;
  data?: any;
  params?: any;
  headers?: any;
  path: string;
  token?: string;
  url?: string;
}) {
  const res = await axios({
    method: opts.method,
    params: opts.params,
    headers: {
      ...opts.headers,
      ...(opts.token ? { Authorization: `Bearer ${opts.token}` } : {}),
      ...(opts.data
        ? typeof opts.data === 'string'
          ? {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=utf-8',
            }
          : { 'Content-Type': 'application/json; charset=utf-8' }
        : {}),
    },
    auth: opts.auth,
    data: opts.data,
    url: opts.url ? opts.url : `${origin}/${opts.path}`,
  });

  return res.data;
}
