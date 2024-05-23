import {createUser, loginUser} from "../../prisma/user.js";
import {fail, redirect} from "@sveltejs/kit";
import {setAuthToken} from "$lib/utils.js";

export const load = async ({locals}) => {
    const user = locals.user;
    if (user) {
        redirect(302, "/home")
    }
};

export const actions = {
    login: async ({cookies, request}) => {
        console.log('login action');
        const formData = Object.fromEntries(await request.formData());
        const {email, password} = formData;

        if (!email) {
            return fail(400, { email, missing : {email: true }});
        }
        if (!password) {
            return fail(400, { email, missing: {password: true }});
        }

        const {error, token} = await loginUser(email, password);
        if (error) {
            return fail(400, { email, error });
        }

        setAuthToken({cookies, token});
        throw redirect(302, "/")
    },

    register:  async ({cookies, request}) => {
        const formData = Object.fromEntries(await request.formData());
        const {email, password, city} = formData;

        if (!email) {
            return fail(400, { email, missing: true });
        }
        if (!password) {
            return fail(400, { password, missing: true });
        }
        if (!city) {
            return fail(400, { city, missing: true });
        }
        const {error, token} = await createUser(email, password, city);

        if (error) {
            console.log({error});
            return fail(500, {error});
        }

        setAuthToken({cookies, token});

        throw  redirect(302, "/");
    },

    discover: async ({request}) => {
        const formData = Object.fromEntries(await request.formData());
        const city = formData.city;

        if (!city) {
            return fail(400, {error: "City is required"});
        }

        throw redirect(302, `/discover/${city}`);
    }
}