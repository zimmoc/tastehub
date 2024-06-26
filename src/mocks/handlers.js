import { rest } from 'msw';

const baseURL = 'https://tastehub-drf-6b3e52885b64.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json());
  }),
];
