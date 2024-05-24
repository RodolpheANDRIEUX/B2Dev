import db from "./db.js";

export async function createEvent(eventName, eventDate, userId) {
    try {
        const event = await db.event.create({
            data: {
                name: eventName,
                date: new Date(`${eventDate}T00:00:00Z`),
                popularity: 10
            }
        });

        await db.user.update({
            where: { id: userId },
            data: {
                Events: {
                    connect: { id: event.id }
                }
            }
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}