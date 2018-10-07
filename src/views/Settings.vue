<template>
  <div class="settings">
    <MenuBar/>
    <div class= "content">
      <h1>Settings</h1>
      <ul class = "settingList">
        <li> Change Password </li>
        <li> Change Profile Picture </li>
        <li> Notification Settings </li>
        <li> Trade History </li>
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
  width: 80%;
  margin: auto;
}

.settingList{
  margin: 0px;
  padding: 2em;
  line-height: 2em;
	background-color: #BBDFF9; 
	border: 3px black solid;
  list-style:none;
  font-size: 150%;
  text-align: left;
}
</style>