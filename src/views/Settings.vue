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
            <summary>Notification Settings</summary>
            <div class="settingContent">
            <form action="/Settings.vue" method="get">

              <input type="checkbox" name="mail" value="Mail"> Recieve Mail Notifications<br>
           
              <input type="checkbox" name="messages" value="messages"> Recieve Messages Notifications<br>
            
              <input type="checkbox" name="offers" value="Offers"> Recieve Offers Notifications<br>

              <input type="checkbox" name="requests" value="Requests"> Recieve Requests Notifications<br>

              <input type="submit" value="Save">
              </form>

            </div>
          </details>  
          </li>
        <li> <details>
            <summary>Trade History</summary>
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
  text-align: left;
}

summary{
  font-size:150%;
}
summary .settingContent{
  left: 100px;
}
</style>