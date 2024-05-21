import {redirect} from "@sveltejs/kit";
import db from "/prisma/db.js";

export const load = async ({locals}) => {
    const user = locals.user;
    if (!user) {
        redirect(302, "/")
    }

    // get all user groups
    const groups = await db.user.findUnique({
        where: { id: user.id },
        include: { Group: true }
    });

    // get all user events
    const events = await db.user.findUnique({
        where: { id: user.id },
        include: { Event: true }
    });

    // get 10 best events
    
};