<template>
  <router-link to="/notifications">
    <img src="@/assets/Bell.png">
  </router-link>
</template>

<script>
export default {
  name: 'NotificationButton'
}
</script>

<style>
img {
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 70px;
}

img:hover {
  cursor: pointer;
}
</style>
