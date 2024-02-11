import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { User } from './entity/user';

const app = new Elysia()
  .use(swagger())
  .get('/', () => ({ hello: 'world' }))
  .post('/sign-up', async ({ body }) => User.create(body), {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  })
  .get('/user', () => User.findAll())
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
