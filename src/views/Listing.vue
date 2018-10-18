<template>
  <div class="about">
    <MenuBar/>
    <div class="content">
        <h1> New Listing </h1>
        <div class ="box1">    
            <!-- Rounded switch -->
            <h2>New Offer </h2>
            <label class="switch">
            <input id="checkbox" name="checkbox" type="checkbox" v-model="checked"/>
            <span class="slider round"></span>
            </label>
            <h2>New Request</h2>
        </div>
        <div class="grid">
            <div id="offer" v-if="!checked">
                <h3>Offer a shift</h3>
                <label>Date of shift:</label>
                <input type=text v-model="fillDate" placeholder="MM/DD/YYYY"><br>
                <label>Start of shift:</label>
                <input type="text" v-model="startTime" placeholder="00:00"><br>
                <label>End of shift:</label>
                <input type="text" v-model="endTime" placeholder="24:00"><br>
                <button v-on:click="handleNewOffer">Submit</button>
            </div>
            <div id = "request" v-else>
                <h3>Request a shift</h3>
                <label>Date of shift:</label>
                <input type=text  v-model="fillDate" placeholder="MM/DD/YYYY"><br>
                <label>Earliest the shift can start:</label>
                <input type=text v-model="startTime" placeholder="00:00"><br>
                 <label>Latest the shift can end:</label>
                <input type=text v-model="endTime" placeholder="24:00"><br>
                <button v-on:click="handleNewRequest">Submit</button>
            </div>
            <div class="chart">
                <datepicker :inline="true" v-model="date" @selected="handleDateChange" id="offerDate"/>
            </div>
        </div>
        <Chart/>
    </div>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import Datepicker from 'vuejs-datepicker';
import Chart from '@/components/Chart'

export default {
  name: "Listing",
  components: {
    MenuBar,
    Datepicker,
    Chart
  },

  data() {
      return {
        checked: false,
        startTime: '',
        endTime: '',
        date: new Date(),
        fillDate: (new Date()).toLocaleDateString("en-US")
      }
  },
    methods: {
    handleDateChange(date) {
      this.fillDate = date.toLocaleDateString("en-US");
    },

    handleNewOffer(e) {
      e.preventDefault();
      let user = JSON.parse(localStorage.getItem('user'));
      let data = {
        type: 'Offer',
        first_name: user.first_name,
        last_name: user.last_name,
        date: this.formatDate(this.date),
        start_time: this.startTime,
        end_time: this.endTime
      }
      this.$http
        .post("http://localhost:3000/addlisting", data)
        .then(response => {
          console.log(response);
          this.$router.push("/marketplace");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },

    handleNewRequest(e) {
      e.preventDefault();
      let user = JSON.parse(localStorage.getItem('user'));
      let data = {
        type: 'Request',
        first_name: user.first_name,
        last_name: user.last_name,
        date: this.formatDate(this.date),
        start_time: this.startTime,
        end_time: this.endTime
      }
      this.$http
        .post("http://localhost:3000/addlisting", data)
        .then(response => {
          console.log(response);
          this.$router.push("/marketplace");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },

    formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
  }
}
</script>

<style>
.grid{
    display: grid;
    grid-template-columns: 60% auto;
}
.content{
    text-align: left;
}
.content #offer {
    text-align: left;
}
.content h2 {
  display: inline;
}

.box1 {
  width: auto;
}

.chart{
    /* Background */
    position: relative;
    align-content: right;
    width: auto;
    height: auto;
    margin-left: 10px;
    top: 0px;
    display:inline-block;
    border-radius: 15px;
  }

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>