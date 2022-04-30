import BaseUrl from "../utils/BaseUrl";

const findAll = async function () {
    return await fetch(`${BaseUrl.getUrl()}/event-categories/`).then((res) =>
        res.json()
    );
};

const createEventCategory = async function (eventCategory) {
    return await fetch(`${BaseUrl.getUrl()}/event-categories/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            eventCategoryName: eventCategory.eventCategoryName,
            eventCategoryDescription: eventCategory.eventCategoryDescription,
            eventDuration: eventCategory.eventDuration,
        }),
    }).then((res) => res.json());
};

const updateEventCategory = async function (eventCategoryId, eventCategory) {
    return await fetch(
        `${BaseUrl.getUrl()}/event-categories/${eventCategoryId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                eventCategoryName: eventCategory.eventCategoryName,
                eventCategoryDescription:
                    eventCategory.eventCategoryDescription,
                eventDuration: eventCategory.eventDuration,
            }),
        }
    ).then((res) => res.json());
};

const deleteEventCategory = async function (eventCategory) {
    return await fetch(
        `${BaseUrl.getUrl()}/event-categories/${eventCategory.id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((res) => res.json());
};

export default {
    findAll,
    createEventCategory,
    updateEventCategory,
    deleteEventCategory,
};
