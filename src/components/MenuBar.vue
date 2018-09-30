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
    <router-link to="/logout" class="menu-item">
      <i class='fa fa-power-off fa-3x'/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
}
</script>

<style>
  .menu-item {
    display: block;
    background-color: #59B9FF;
    margin-top: 1px;
    padding: 30px 8px;
    color:black;
  }

  .menu-item:hover {
    background-color: #D4EDFF;
    cursor: pointer;
  }
</style>
