<template>
  <div class="about">
    <MenuBar/>
    <h1>New Offer</h1>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import Offer from '@/components/Offer'
import Request from '@/components/Request'



export default {
  name: 'Listing',
  components: {
    MenuBar,
    Offer,
    Request
  }

}
</script>