<template>
  <div class="notifications">
    <MenuBar/>
    <div class="content">
      <h1>Notifications</h1>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Notifications',
  components: {
    MenuBar,
  }
}
</script>
