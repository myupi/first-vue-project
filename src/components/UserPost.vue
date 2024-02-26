<template>
  <div class="app">
    <div class="postList" v-if="!isLoading">
      <transition-group name="post">
        <post-card v-for="post in posts" key="{{post.id}}" :post="post"/>
      </transition-group>
    </div>
    <div v-else class="loading">Загрузка...</div>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "@/components/PostCard";

export default {
  components: {PostCard},
  data() {
    return {
      posts: [],
      isLoading: false
    }
  },
  mounted() {
    const userId = this.$route.params.id;
    this.getUserPosts(userId)
  },
  methods: {
    async getUserPosts(userId){
      this.isLoading = true
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        params: {
          userId: userId
        }
      })
      this.posts = response.data
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.app{
  padding: 10px;
}
.postList{
  padding: 10px;
}
.post-enter-active,
.post-leave-active {
  transition: all 0.5s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.loading{
  font-size: 40px;
  text-align: center;
}
</style>