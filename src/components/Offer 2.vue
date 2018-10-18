<template>
  <div class="about">
    <MenuBar/>
    <h1>New Offer</h1>
    <router-link to="/marketplace/request">
      <button>Toggle</button>
    </router-link>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Offer',
  components: {
    MenuBar
  }
}
</script>