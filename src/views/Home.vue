<template>
  <div class="home">
    <MenuBar/>
    <div class="content">
      <div class="top-bar">
        <!--Trade shift inputs -->
        <form class="tradePanel">
          <input type="yourShift" name="yourShift" placeholder="Your Shift...">
          <img src="@/assets/Switch.png" class="switchImage">
          <input type="theirShift" name="theirShift" placeholder="Their Shift...">
          <input type="submit" Value="TRADE!" class="tradeButton">
        </form>
        <datepicker :inline="true" v-model="date" @selected="handleDateChange"/>
      </div>
      <Chart :date="date"/> 
      <NotificationButton/>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'
import Datepicker from 'vuejs-datepicker';
import Chart from '@/components/Chart';

export default {
  name: 'Home',
  components: {
    MenuBar,
    Datepicker,
    Chart,
    NotificationButton
  },

  data() {
    return {
      date: new Date(),
    }
  },

  methods: {
    handleDateChange(date) {
      console.log(date);
      this.date = date;
    }
  }
}


</script>

<style scoped>
  .top-bar {
    display: grid;
    grid-template-columns: auto auto;
  }

  .chart{
    /* Background */
    position: absolute;
    width: 1200px;
    height: 700px;
    left: 75px;
    top: 200px;
    display:inline-block;
    background: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  }
  
  .tradePanel{
    position: relative;
    margin-top: 25px;
    display: inline-block;
    width: 625px;
    height: 125px;
    background: #BBDFF9;
    border-radius: 15px;
  }

  .vdp-datepicker {
    display: inline-block;
  }
  
  input[type=yourShift]{
    position:absolute;
    width: 225px;
    height: 25px;
    left: 30px;
    top: 30px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 17px;
    text-align: center;
    border:0px;
  }

.switchImage{
  position: absolute;
  width: 45px;
  height: 45px;
  left:290px;
  top:25px;
}

input[type=theirShift]{
  position:absolute;
  width: 225px;
  height: 25px;
  right:30px;
  top: 30px;
  background: #FFFFFF;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 17px;
  text-align: center;
  border:0px;
}

.tradeButton{
    position: absolute;
    width: 75px;
    height: 25px;
    left: 275px;
    bottom: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 13px;
    color: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 3px rgba(0, 0, 0, 0.1);
    background: #59B9FF;
    border-radius: 15px;
}

</style>
