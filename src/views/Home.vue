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
      <Grid :data="gridData" :columns="gridColumns" :filterKey="searchQuery"></Grid>
      <NotificationButton/>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'
import Datepicker from 'vuejs-datepicker';
//import Chart from '@/components/Chart';
import Grid from '@/components/Grid'

export default {
  name: 'Home',
  components: {
    MenuBar,
    Datepicker,
    Grid,
    NotificationButton
  },

  data() {
    return {
      date: '',
      searchQuery: '',
      gridColumns: [  
        'id',
        'first_name',
        'last_name',
        'date',
        'start_time',
        'end_time'],
        gridData: []
    }
  },

  mounted: function() {
    this.date = new Date();
    this.getData();
  },

  methods: {
    handleDateChange(date) {
      this.date = date;
      this.getData();
    },

    getData() {
      this.$http
        .post("http://localhost:3000/full-schedule", {date: this.formatDate(this.date)})
        .then(response => {
          console.log(response.data.data);
          this.gridData = response.data.data;
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
