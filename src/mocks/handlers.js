import { rest } from 'msw';

const baseURL = 'https://tastehub-drf-6b3e52885b64.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: 'postington',
        email: '',
        first_name: '',
        last_name: '',
        profile_id: 2,
        profile_image:
          'https://res.cloudinary.com/dpokxro3u/image/upload/v1/media/images/1_artuz9',
      }),
      ctx.set('Access-Control-Allow-Origin', '*')
    );
  }),

  rest.get(`${baseURL}profiles/2`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 2,
        owner: 'postington',
        created_at: '25 Jun 2024',
        updated_at: '25 Jun 2024',
        bio: 'I am HIM. Scroll down for mediocre recipes',
        name: 'Poster Postington',
        image:
          'https://res.cloudinary.com/dpokxro3u/image/upload/v1/media/images/1_artuz9',
        is_owner: true,
        following_id: null,
        recipes_count: 4,
        followers_count: 10,
        following_count: 2,
      }),
      ctx.set('Access-Control-Allow-Origin', '*')
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Token refreshed successfully' }),
      ctx.set('Access-Control-Allow-Origin', '*')
    );
  }),

  rest.options(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.set('Access-Control-Allow-Methods', 'POST, OPTIONS'),
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    return res(ctx.status(200));
  }),
];
