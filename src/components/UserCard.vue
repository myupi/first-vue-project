<template>
  <div class="userCard">
    <img src="https://picsum.photos/300/300">
    <h2>{{user.name}}</h2>
    <p>Username: {{user.username}}</p>
    <p>Phone: {{user.phone}}</p>
    <router-link :to="{ path: `/post/${user.id}` }"><button>Посмотреть посты</button></router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.userCard{
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  border: 2px solid #274d00;
  border-radius: 10px;
}

img{
  border-radius: 5px;
}
button{
  padding: 10px;
  background: #274d00;
  color: white;
  border: 0;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.3s;
  width: 100%;
}
button:hover{
  opacity: 0.75;
}
</style>