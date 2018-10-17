<template>
  <div class="menu">
    <router-link to="/" class="menu-item">
      <i class='fa fa-home fa-2x'/>
    </router-link>
    <router-link to="/marketplace" class="menu-item">
      <i class='fa fa-list fa-2x'/>
    </router-link>
    <router-link to="/settings" class="menu-item">
      <i class='fa fa-cogs fa-2x' />
    </router-link>
    <router-link v-if="manager" to="/manager-settings" class="menu-item">
      <i class='fa fa-wrench fa-2x'/>
    </router-link>
    <router-link to="/login" class="menu-item">
      <i class='fa fa-power-off fa-2x'/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      manager: true 
      //toggles manager options in menubar
    }
  }
}
</script>

<style scoped>
.menu {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #59B9FF;
  z-index: 1;
}

.menu-item {
  display: block;
  padding: 30px 8px;
  color:black;
}

.menu-item:hover {
  background-color: #D4EDFF;
  cursor: pointer;
}

.menu-item:active {
  transform: scale(.95);
}
</style>
