<template>
  <div class="manager-settings">
    <MenuBar />
    <h1>Manager Settings</h1>
    <main class="l-main">
      <div class="content-wrapper content-wrapper--with-bg">

        <div class="container">
          <form class="form-horizontal">
            <fieldset>
              <legend>Hours Settings:</legend>

              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Max Hours per day</label>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus"
                        data-field="quant[1]">
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Min Hours per day</label>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus"
                        data-field="quant[1]">
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Max Hours per week</label>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus"
                        data-field="quant[1]">
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Min Hours per week</label>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus"
                        data-field="quant[1]">
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="singlebutton"></label>
                <div class="controls">
                  <button id="singlebutton" name="singlebutton" class="btn btn-info">Update</button>
                </div>
              </div>
            </fieldset>
          </form>
          <br>
          <legend>Create new Employee:</legend>
          <br>
          <br>
          <!-- Text input-->
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">First Name:</label>
            <div class="col-md-4">
              <input id="firstname" name="firstname" type="text" placeholder="First Name" class="form-control input-md" v-model="newFirstName">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Last Name:</label>
            <div class="col-md-4">
              <input id="lastname" name="lastname" type="text" placeholder="Last Name" class="form-control input-md" v-model="newLastName">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <!-- Prepended text-->
          <div class="form-group">
            <label class="col-md-1 control-label" for="designation">Designation</label>
            <div class="col-md-4">
              <select id="designation" name="designation" class="form-control">
                <option value="Director">Director</option>
                <option value="ProductHead">Product Head</option>
                <option value="GeneralManager">General Manager</option>
                <option value="ProductManager">Product Manager</option>
                <option value="TeamLead">Team Lead</option>
              </select>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="department">Department</label>
            <div class="col-md-4">
              <select id="department" name="department" class="form-control">
                <option value="Accounts">Accounts</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Loan">Loan</option>
              </select>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Email</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="text" placeholder="you@email.com " class="form-control input-md" v-model="newEmail">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Confirm Email:</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="text" placeholder="Re-enter Email adress " class="form-control input-md">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Password::</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="password" placeholder="set new password " class="form-control input-md" v-model="newPassword">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Confirm Password:</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="password" placeholder="Re-Enter Password " class="form-control input-md">
              <span class="help-block"></span>
            </div>
          </div>
          <div class="box2">
            <!-- Rounded switch -->
            <h4>Admin </h4>
            <label class="switch">
              <input id="checkbox" name="checkbox" type="checkbox" v-model="isAdmin" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="control-group">
            <label class="control-label" for="singlebutton"></label>
            <div class="controls">
              <button id="singlebutton" name="singlebutton" class="btn btn-info" v-on:click="handleNewEmployee">Submit</button>
            </div>
            <p v-show="addedUser">User Added Successfully</p>
          </div>
          <br>
          <br>


          <legend>Delete Employee Account:</legend>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Email:</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="text" placeholder="Email adress " class="form-control input-md" v-model="deleteEmail">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Administrator Password:</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="password" placeholder="Enter Password " class="form-control input-md" v-model="deleteAdminPassword">
              <span class="help-block"></span>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="singlebutton"></label>
            <div class="controls">
              <button id="singlebutton" name="singlebutton" class="btn btn-info" v-on:click="handleDeleteEmployee">Delete</button>
            </div>
          </div>
          <p v-show="deletedUser">User Deleted Successfully</p>
          <br>
          <br>
        
          <legend>Feature Toggle</legend>

          <div class="box1">
            <!-- Rounded switch -->
            <h2>MarketPlace </h2>
            <label class="switch">
              <input id="checkbox" name="checkbox" type="checkbox" v-model="marketChecked" />
              <span class="slider round"></span>
            </label>
          </div>

          <div class="box2">
            <!-- Rounded switch -->
            <h2>Trading </h2>
            <label class="switch">
              <input id="checkbox" name="checkbox" type="checkbox" v-model="tradeChecked" />
              <span class="slider round"></span>
            </label>
          </div>

          <div class="control-group">
            <label class="control-label" for="singlebutton"></label>
            <div class="controls">
              <button id="singlebutton" name="singlebutton" class="btn btn-info">Update</button>
            </div>
          </div>
          <br>
          <br>

          <legend> Upload Schedule:</legend>
          <div class="form-group">
            <label class="col-md-1 control-label" for="displayname">Title:</label>
            <div class="col-md-4">
              <input id="displayname" name="displayname" type="text" placeholder="file name: " class="form-control input-md"
                required="">
              <span class="help-block"></span>
            </div>
          </div>
          <br>
          <br>
          <!-- File Button -->
          <div class="control-group">
            <label class="control-label" for="filebutton"></label>
            <div class="controls">
              <input id="filebutton" name="filebutton" class="input-file" type="file">
            </div>
          </div>
          <br>
          <!-- Button -->
          <div class="control-group">
            <label class="control-label" for="singlebutton"></label>
            <div class="controls">
              <button id="singlebutton" name="singlebutton" class="btn btn-info">Upload</button>
            </div>
          </div>
          <br>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'ManagerSettings',
  components: {
    MenuBar
  },

  data() {
    return {
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newPassword: "",
      isAdmin: false,
      addedUser: false,
      deleteEmail: "",
      deleteAdminPassword: "",
      deletedUser: false,
      marketChecked: false,
      tradeChecked: false,
    };
  },

  methods: {
    handleNewEmployee(e) {
      e.preventDefault();
      if(this.newPassword.length > 0) {
        let path = "http://localhost:3000/"
        let data = {
          firstname: this.newFirstName,
          lastname: this.newLastName,
          email: this.newEmail,
          password: this.newPassword
        }
        if(this.isAdmin) {
          path += "register-admin";
          data.isAdmin = 1;
        } else {
          path += "register";
        }
        this.$http
          .post(path, data)
          .then(response => {
            console.log(response);
            this.addedUser = true;
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    },

    handleDeleteEmployee(e) {
      e.preventDefault();
      if(this.deleteEmail.length > 0 && this.deleteAdminPassword.length > 0) {
        let data = {
          isAdmin: JSON.parse(localStorage.getItem('user')).is_admin,
          email: this.deleteEmail,
          password: this.deleteAdminPassword
        }
        this.$http
          .post("http://localhost:3000/delete", data)
          .then(response => {
            console.log(response);
            this.deletedUser = true;
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
}
</script>

<style scoped>
.box1 {
  display: inline-block;
  margin-right: 20px;
}

.box2 {
  display: inline-block;
}
</style>
