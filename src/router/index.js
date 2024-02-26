import {createRouter, createWebHashHistory} from "vue-router";
import MainView from "@/views/MainView";
import PostsView from "@/views/PostsView";
import UserPost from "@/components/UserPost";
import FormView from "@/views/FormView";

const routes = [
    {path: "/", component: MainView},
    {path: "/posts", component: PostsView},
    {path: "/post/:id", component: UserPost},
    {path: "/form", component: FormView}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router