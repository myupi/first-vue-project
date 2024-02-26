import axios from "axios";

export default {
    state: {
        posts: [],
        totalPage: 0,
    },
    getters: {
        getPosts(state){
            return state.posts
        },
        getTotalPage(state){
            return state.totalPage
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts
        },
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        }
    },
    actions: {
        async allPosts(ctx, info) {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params:{
                    _limit: info.limit,
                    _page: info.page
                }
            })
            const pages = Math.ceil(response.headers["x-total-count"] / info.limit)
            ctx.commit("setPosts", response.data)
            ctx.commit("setTotalPage", pages)
        }
    },
}