<template>
  <div class="post">
    <p>Post: {{post.id}}</p>
    <p>Title: {{post.title}}</p>
    <p>Body: {{post.body}}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
  border: 2px solid #274d00;
  padding: 10px;
  margin-bottom: 10px;
}
</style>