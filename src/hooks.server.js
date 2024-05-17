import jwt from 'jsonwebtoken';
import db from "../prisma/db.js";
import {JWT_ACCESS_SECRET} from "$env/static/private";
import { User } from '$lib/store.js';

export const handle = async ({event, resolve}) => {
  const authCookie = event.cookies.get('AuthorizationToken');

  if (authCookie) {
    const token = authCookie.split(' ')[1];
    try {
      const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
      const user = await db.user.findUnique({
        where: {
          id: jwtUser.id
        },
        select: {
          id: true,
          email: true,
        }
      });
      if (user) {
        console.log('User found');
        event.locals.user = user;
        User.set(user);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('No auth cookie');
    event.locals.user = null;
    User.set(null);
  }
  return await resolve(event);
};

