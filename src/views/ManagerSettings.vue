<template>
  <div class="manager-settings">
    <MenuBar />
    <h1>Manager Settings</h1>

    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>

    <main class="l-main">
      <div class="content-wrapper content-wrapper--with-bg">

        <div class="container">
          <form class="form-horizontal">
            <fieldset>

              <!-- Form Name -->
              <legend>Employee Details</legend>

              <!-- Text input-->
              <div class="form-group">
                <label class="col-md-4 control-label" for="displayname">Name:</label>
                <div class="col-md-6">
                  <input id="displayname" name="displayname" type="text" placeholder="Please enter an employee name "
                    class="form-control input-md" required="">
                  <span class="help-block"></span>
                </div>
              </div>

              <!-- Prepended text-->
              <div class="form-group">
                <label class="col-md-4 control-label" for="designation">Designation</label>
                <div class="col-md-6">
                  <select id="designation" name="designation" class="form-control">
                    <option value="Director">Director</option>
                    <option value="ProductHead">Product Head</option>
                    <option value="GeneralManager">General Manager</option>
                    <option value="ProductManager">Product Manager</option>
                    <option value="TeamLead">Team Lead</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label" for="department">Department</label>
                <div class="col-md-6">
                  <select id="department" name="department" class="form-control">
                    <option value="Accounts">Accounts</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Loan">Loan</option>
                  </select>
                </div>
              </div>

              <!-- Text input-->
              <div class="form-group">
                <label class="col-md-4 control-label" for="publickey">Employee Key</label>
                <div class="col-md-4">
                  <div class="input-group input-file" name="publickey">
                    <input type="text" class="form-control" placeholder='Enter ID' />
                    <span class="input-group-btn">
                      <button class="btn btn-default btn-choose" type="button">Submit</button>
                    </span>
                  </div>
                </div>
              </div>
              <br />

              <legend>Hours Settings</legend>

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


              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Schedule beginning:</label>
                <div class="col-md-2">
                  <input id="lastdate" name="lastdate" type="date" placeholder="Please enter a display name " class="form-control input-md"
                    required="">
                </div>
              </div>

              <div class="form-group">
                <label for="regno" class="col-md-4 control-label">Schedule end:</label>
                <div class="col-md-2">
                  <input id="lastdate" name="lastdate" type="date" placeholder="Please enter a display name " class="form-control input-md"
                    required="">
                </div>
              </div>
            </fieldset>
          </form>

        </div>
      </div>
    </main>


  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";

export default {
  name: "ManagerSettings",
  components: {
    MenuBar
  }
};
</script>