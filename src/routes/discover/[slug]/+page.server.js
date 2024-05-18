import {error} from "@sveltejs/kit";

export function load({ params }) {
    const { slug } = params;
    const city = slug

    if (!city) {
        return error(404, 'City not found');
    }

    return {city};
}