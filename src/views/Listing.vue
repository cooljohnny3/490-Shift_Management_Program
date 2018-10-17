<template>
  <div class="about">
    <MenuBar/>
    <div class="content">
        <h1> New Listing </h1>
        <div class ="box1">    
            <!-- Rounded switch -->
            <h2>New Offer </h2>
            <label class="switch">
            <input id="checkbox" name="checkbox" type="checkbox"/>
            <span class="slider round"></span>
            </label>
            <h2>New Request</h2>
        </div>
        <div id="offer">
            This is Offer<br>
            Date of shift:
            <input type=text placeholder="MM/DD/YYYY">
            <button>Submit</button>
        </div>
        <div id = "request">
            This is Request<br>
            Date of shift:
            <input type=text placeholder="MM/DD/YYYY">
            <button>Submit</button>
        </div>
    </div>
  </div>
</template>




<script>
import MenuBar from "@/components/MenuBar";
import Offer from "@/components/Offer";
import Request from "@/components/Request";

export default {
  name: "Listing",
  components: {
    MenuBar,
    Offer,
    Request
  }
}

$("#content :checkbox").change(function() {
    alert("In function");
    if (this.checked != true) {
        $("#request").show();
        $("#offer").hide();
    }
    else{
        $("#request").hide();
        $("#offer").show();  
    }
    
});
</script>

<style>
.content h2 {
  display: inline;
}

.box1 {
  outline: 3px solid black;
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