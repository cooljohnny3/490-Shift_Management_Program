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
                Date of shift:
                <input type=text v-model="fillDate" placeholder="MM/DD/YYYY">
                <button>Submit</button>
            </div>
            <div id = "request" v-else>
                <h3>Request a shift</h3>
                Date of shift:
                <input type=text  v-model="fillDate" placeholder="MM/DD/YYYY">
                <br>Earliest the shift can start: 
                <input type=text placeholder="00:00">
                <br> Latest the shift can end: 
                <input type=text placeholder="24:00">
                <button>Submit</button>
            </div>
            <div class="chart">
                <datepicker :inline="true" v-model="date" @selected="handleDateChange" id="offerDate"/>
            </div>
        </div>
    </div>
  </div>
</template>




<script>
import MenuBar from "@/components/MenuBar";
import Datepicker from 'vuejs-datepicker';
import Offer from "@/components/Offer";
import Request from "@/components/Request";


export default {
  name: "Listing",
  components: {
    MenuBar,
    Offer,
    Request,
    Datepicker
  },

  data() {
      return {
        checked: false,
        date: new Date(),
        fillDate: (new Date()).toLocaleDateString("en-US")
      }
  },
    methods: {
    handleDateChange(date) {
      console.log(date.toLocaleDateString("en-US"));
      this.fillDate = date.toLocaleDateString("en-US");
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