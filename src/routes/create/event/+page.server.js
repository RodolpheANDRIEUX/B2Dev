import { createEvent } from '/prisma/event.js';

export const actions = {
    default: async  ({ request }) => {
        const data = await request.formData();
        const eventName = data.get('eventName');

        await createEvent(eventName);
    }
};