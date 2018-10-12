<template>
  <div class="home">
    <MenuBar/>

    <!--Trade shift inputs -->
    <form class="tradePanel"> 
  
      <input type="yourShift" name="yourShift" placeholder="Your Shift...">

      <img src="@/assets/Switch.png" class="switchImage">

      <input type="theirShift" name="theirShift" placeholder="Their Shift...">

      <input type="submit" Value="TRADE!" class="tradeButton">
      
    </form>
    <body>
      <canvas id="myCanvas" class="chart"></canvas>
    </body>
    <NotificationButton/>
  </div>
</template>

  


<script>
export default {

}
</script>

<style>

</style>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'

export default {
  name: 'Home',
  components: {
    MenuBar,
    NotificationButton
  }
}

</script>

<style scoped>
  .home{
    background:#F0F0F0;
  }
  .chart{
    /* Background */

    position: absolute;
    width: 1300px;
    height: 700px;
    left: 115px;
    top: 254px;

    background: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

  }
  .tradePanel{ 
 
    position:absolute;
    width: 700px;
    height: 175px;
    left: 110px;
    top: 30px;
    background: #BBDFF9;
    border-radius: 15px;
  }
  

  input[type=yourShift]{
    position:absolute;
    width: 225px;
    height: 30px;
    left: 40px;
    top: 40px;
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
  
  width: 52.22px;
  height: 53.06px;
  left:325px;
  top:33px;
}
input[type=theirShift]{
  position:absolute;
  width: 225px;
  height: 30px;
  right:40px;
  top: 40px;
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
    width: 100px;
    height: 32px;
    left: 300px;
    bottom: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;

    color: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 2px rgba(0, 0, 0, 0.1);
    background: #59B9FF;
    border-radius: 15px;
}

.calender{

  /* Grid */
  position: relative;
  width: 411px;
  height: 190.85px;
  left: 1004px;
  top: 38.15px;

  /* Rectangle 2 */

  position: absolute;
  width: 410.01px;
  height: 190.82px;
  left: 1004px;
  top: 38.16px;

  background: #BBDFF9;
  border-radius: 15px;
}

</style>
