<template>
  <div class="menu">
    <router-link to="/" class="menu-item">
      <i class='fa fa-home fa-3x'/>
    </router-link>
    <router-link to="/marketplace" class="menu-item">
      <i class='fa fa-list fa-3x'/>
    </router-link>
    <router-link to="/settings" class="menu-item">
      <i class='fa fa-cogs fa-3x'/>
    </router-link>
    <router-link v-if="manager" to="/manager-settings" class="menu-item">
      <i class='fa fa-wrench fa-3x'/>
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
      manager: this.checkAdmin()
      //toggles manager options in menubar
    }
  },

  methods : {
    

    logout() {
      localStorage.removeItem('jwt');
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
