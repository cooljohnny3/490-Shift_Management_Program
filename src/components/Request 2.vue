<template>
  <div class="about">
    <MenuBar/>
    <h1>New Request</h1>
    <router-link to="/marketplace/offer">
      <button>Toggle</button>
    </router-link>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Request',
  components: {
    MenuBar
  }
}
</script>