<template>
  <navigate/>
  <router-view/>
</template>

<script>
import Navigate from "@/components/Navigate";
export default {
  components: {Navigate}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>