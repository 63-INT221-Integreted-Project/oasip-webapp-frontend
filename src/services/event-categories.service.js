import BaseUrl from "../utils/BaseUrl";

const findAll = async function () {
    return await fetch(`${BaseUrl.getUrl()}/event-categories/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    }).then((res) => res.json());
};

const createEventCategory = async function (eventCategory) {
    return await fetch(`${BaseUrl.getUrl()}/event-categories/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
            eventCategoryName: eventCategory.eventCategoryName.trim(),
            eventCategoryDescription:
                eventCategory.eventCategoryDescription || "",
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
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify({
                eventCategoryId: eventCategoryId,
                eventCategoryName: eventCategory.eventCategoryName.trim(),
                eventCategoryDescription:
                    eventCategory.eventCategoryDescription || "",
                eventDuration: eventCategory.eventDuration,
            }),
        }
    ).then((res) => res.json());
};

const deleteEventCategory = async function (eventCategoryId) {
    await fetch(`${BaseUrl.getUrl()}/event-categories/${eventCategoryId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });
};

export default {
    findAll,
    createEventCategory,
    updateEventCategory,
    deleteEventCategory,
};
