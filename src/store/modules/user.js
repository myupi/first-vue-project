import axios from "axios";

export default {
    state: {
        user: {},
        token: "",
        users: [],
    },
    getters: {
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        },
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        registerUser(state, user){
            state.user = user
        },
        setToken(state, token){
            state.token = token
        },
        setUsers(state, users){
            state.users = users
        }
    },
    actions: {
        async registration(ctx, user){
            try {
                const res = await axios.post("http://localhost:9781/auth/registration", user)
                ctx.commit("registerUser", res.data)
                ctx.commit("setToken", res.data.token)
                localStorage.setItem("token", res.data.token)
            }catch (e){
                console.log(e)
            }
        },
        async getUsersList(ctx){
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                ctx.commit("setUsers", res.data)
            }catch (error){
                console.log(error)
            }
        }
    },
}