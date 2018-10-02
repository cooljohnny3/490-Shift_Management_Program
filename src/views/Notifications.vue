<template>
  <div class="notifications">
    <MenuBar/>
    <h1>Notifications</h1>
    <NotificationButton/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'

export default {
  name: 'Notifications',
  components: {
    MenuBar,
    NotificationButton
  }
}
</script>
