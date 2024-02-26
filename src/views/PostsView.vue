<template>
  <div class="app">
    <div class="postList" v-if="!isLoading">
      <transition-group name="post">
        <post-card v-for="post in getPosts" key="{{post.id}}" :post="post"/>
      </transition-group>
      <div class="page_wrapper">
        <button v-for="page in getTotalPage" key="page" @click="changePage(page)" :class="{ 'active': this.page == page }">{{page}}</button>
      </div>
    </div>
    <div v-else class="loading">Загрузка...</div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import {mapGetters, mapActions} from "vuex"

export default {
  components: {PostCard},
  computed: {
    ...mapGetters(["getPosts", "getTotalPage"])
  },
  data() {
    return {
      limit: 10,
      page: 1,
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["allPosts"]),

    async fetchData(page) {
      await this.allPosts({limit: this.limit, page: page});
    },

    async changePage(page) {
      if (this.page === page) {
        return 0;
      }
      await this.fetchData(page);
      this.page = page;
    },
  },

  beforeMount() {
    this.fetchData();
  }

};
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

.page_wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.page_wrapper button{
  padding: 10px;
  background: #274d00;
  color: white;
  border: 1px solid #274d00;
  border-radius: 5px;
  transition: all 0.3s linear;
   cursor: pointer;
}

.page_wrapper button:hover{
  opacity: 0.75;
}

.page_wrapper button.active{
  background: white;
  color: #274d00;
  border: 1px solid #274d00;
}
.loading{
  font-size: 40px;
  text-align: center;
}
</style>