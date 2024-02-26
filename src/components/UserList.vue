<template>
  <div class="userList">
    <div v-for="user in getUsers" @key="user.id" v-if="getUsers.length > 0">
      <user-card :user="user"/>
    </div>
    <h1 v-else>Пока нет юзеров</h1>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
export default {
  components: {UserCard},
  props: {
    getUsers: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
h1{
  color: white;
}
.userList{
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
</style>