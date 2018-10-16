<template>
  <div class="about">
    <MenuBar/>
    <h1>Marketplace</h1>
    <router-link to="marketplace/listing">
      <p>New Listing</p>
    </router-link>
    <NotificationButton/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'

export default {
  name: 'Marketplace',
  components: {
    MenuBar,
    NotificationButton
  }
}
</script>