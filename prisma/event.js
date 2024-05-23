import db from "./db.js";

export function createEvent(eventName) {
    return db.event.create({
        data: {
            name: eventName,
            date: new Date(),
            popularity: 0
        }
    });
}