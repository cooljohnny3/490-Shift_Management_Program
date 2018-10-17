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
    <div class="menu-item" v-on:click="logout">
      <i class='fa fa-power-off fa-3x'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      //toggles manager options in menubar
      manager: this.checkAdmin()
    }
  },

  methods: {
    checkAdmin() { return JSON.parse(localStorage.getItem('user')).is_admin == 1; },

    logout() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$router.push("/login");
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
