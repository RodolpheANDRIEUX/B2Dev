import {redirect} from "@sveltejs/kit";
import db from "/prisma/db.js";

export const load = async ({locals}) => {
    const user = locals.user;
    if (!user) {
        redirect(302, "/")
    }

    // get all user groups
    const userData = await db.user.findUnique({
        where: { id: user.id },
        include: { Groups: true, Events: true }
    });
    const groups = userData.Groups;
    const events = userData.Events;

    // get 10 best events
    const bestEvents = await db.event.findMany({
        take: 10,
        orderBy: {popularity: 'desc'}
    });

    return {
        groups,
        events,
        bestEvents
    }
};