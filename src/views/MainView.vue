<template>
  <div class="app">
    <user-list :getUsers="getUsers"/>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import {mapGetters,mapActions} from "vuex"


export default {
  components: {UserList},
  data() {
    return {
      users: []
    }
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
  beforeMount() {
    this.getPosts()
  },
  methods: {
    ...mapActions(["getUsersList"]),
    async getPosts() {
      await this.getUsersList()
    }
  }
}
</script>

<style scoped>
.app{
  padding: 10px;
}

</style>