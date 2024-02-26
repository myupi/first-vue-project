<template>
  <div class="navigate">
    <router-link to="/">Users</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/form">Form</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigate{
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
}
a{
  text-decoration: none;
  font-size: 30px;
  cursor: pointer;
  color: #274d00;
  transition: all 0.3s;
}
a:hover{
  opacity: 0.75;
}
</style>