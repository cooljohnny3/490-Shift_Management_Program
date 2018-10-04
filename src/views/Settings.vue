<template>
  <div class="settings">
    <MenuBar/>
    <div class= "content">
      <h1>Settings</h1>
      <ul class = "settingList">
        <li> setting1 </li>
        <li> setting2 </li>
        <li> setting3 </li>
        <li> setting4 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Settings',
  components: {
    MenuBar
  }
}
</script>

<style>
.content{
  padding-left: 110px;
  width: 50%;
  margin: auto;
}

.settingList{
  list-style-type: none;
	background-color: #BBDFF9; 
	border: 3px black solid;
}
</style>