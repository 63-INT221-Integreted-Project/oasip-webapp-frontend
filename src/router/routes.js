import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventCategories from "../views/EventCategories.vue";
import Teams from "../views/Teams.vue";
import Users from "../views/Users.vue";
import Login from "../views/Login.vue";

const history = createWebHistory("/kp2/");
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "OASIP - Booking",
            metaTags: [
                {
                    name: "description",
                    content: "Index booking of OASIP.",
                },
                {
                    property: "og:description",
                    content: "Index booking of OASIP.",
                },
            ],
        },
    },
    {
        path: "/event-categories",
        name: "EventCategories",
        component: EventCategories,
        meta: {
            title: "OASIP - Event Category",
            metaTags: [
                {
                    name: "description",
                    content: "Event category of OASIP.",
                },
                {
                    property: "og:description",
                    content: "Event category of OASIP.",
                },
            ],
        },
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: {
            title: "OASIP - User",
            metaTags: [
                {
                    name: "description",
                    content: "Event category of OASIP.",
                },
                {
                    property: "og:description",
                    content: "Event category of OASIP.",
                },
            ],
        },
    },
    {
        path: "/teams",
        name: "Teams",
        component: Teams,
        meta: {
            title: "OASIP - Teams",
            metaTags: [
                {
                    name: "description",
                    content: "Teams create of OASIP.",
                },
                {
                    property: "og:description",
                    content: "Teams create of OASIP.",
                },
            ],
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "OASIP - Login",
            metaTags: [
                {
                    name: "description",
                    content: "Teams create of OASIP.",
                },
                {
                    property: "og:description",
                    content: "Teams create of OASIP.",
                },
            ],
        },
    },
];
const router = createRouter({ history, routes });
router.beforeEach((to, from, next) => {
    // @ts-ignore
    document.title = to.meta.title;
    next();
});
export default router;
