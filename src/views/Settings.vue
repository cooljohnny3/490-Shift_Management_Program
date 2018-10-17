<template>
  <div class="settings">
    <MenuBar/>
    <div class= "content">
      <h1>Settings</h1>
      <ul class = "settingList">
        <li>
          <details>
            <summary>Change Password</summary>
            <div class="settingContent">
            <label for="">Current Password
              <input type="text" name="" id=""><br>
            </label>
            <label for="">New Password
              <input type="text" name="" id=""><br>
            </label>
            <label for="">Confirm New Password
              <input type="text" name="" id=""><br>
            </label>
            </div>
          </details> 
        </li>
        <li> <details>
            <summary>Change Profile Picture</summary>
           <div>
             <form>
        <input type="file" 
               id="avatar" name="avatar"
               accept="image/png, image/jpeg" />
<input type="button" value="Submit" onClick="window.location.reload()">             </form>
           </div>
          </details> 
           </li>
        <li> <details>
          <!-- use database to determine which boxes are checked initially -->
            <summary>Notification Settings</summary>
            <input type="checkbox" > text<br>
            <input type="checkbox" > text<br>
            <input type="checkbox" > text<br>
            <input type="checkbox" > text<br>
          </details>  
          </li>
        <li> <details>
            <summary>Trade History</summary>
              <!-- Place trade history after backend is made -->
          </details>  
          </li>
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

<style scoped>
.settingList{
  margin: 0px;
  padding: 2em;
  line-height: 2em;
	background-color: #BBDFF9; 
	border: 3px black solid;
  list-style:none;
  text-align: left;
}

summary{
  font-size:150%;
}
summary .settingContent{
  left: 100px;
}
</style>