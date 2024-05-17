import {fail, redirect} from "@sveltejs/kit";
import {setAuthToken} from "$lib/utils.js";
import {loginUser} from "/prisma/user.js";

export const actions = {
  login: async ({cookies, request}) => {
    console.log('login action');

    const formData = Object.fromEntries(await request.formData());
    const {email, password} = formData;

    const {error, token} = await loginUser(email, password);

    if (error) {
      console.log({error});
      return fail(500, {error});
    }

    setAuthToken({cookies, token});

    throw redirect(302, "/")
  }
}

