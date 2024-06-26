import { createEvent } from '/prisma/event.js';
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async  ({ locals, request }) => {
        const data = await request.formData();
        const eventName = data.get('eventName');
        const eventDate = data.get('eventDate');

        const user = locals.user;
        await createEvent(eventName, eventDate, user.id);

        redirect(301,'/');
    }
};