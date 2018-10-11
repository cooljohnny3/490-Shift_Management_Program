<template>
  <div class="home">
    <MenuBar/>

    <!--Trade shift inputs -->
    <form class="tradePanel"> 
      
      
        <div class="yourShiftTextArea">
            <input type="text" name="yourShift" placeholder="Your Shift...">
        </div>
        <div class="theirShiftBox">
          <div class="theirShiftText">
            <input type="text" name="theirShift" placeholder="Their Shift...">
          </div>
        </div>
        <div class="switchImage">
          <img src="@/assets/Switch.png" class="switchIcon">
        </div>

        <div class="">
          <input type="submit" Value="TRADE!" class="tradeButton">
        </div>
        
    

    </form>
    <NotificationButton/>
  </div>
</template>

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
  
  .tradeButton{

    position: relative;
    width: 104.44px;
    height: 31.83px;
    left: 501.41px;
    top: 163.21px;

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
   
.tradePanel{ 
 
  position: absolute;
  width: 500px;
  height: 150px;
  left: 115px;
  top: 38px;
  background: #BBDFF9;
  border-radius: 15px;

}
.switchImage{
  position: relative;
  width: 52.22px;
  height: 53.06px;
  left: 527.52px;
  top: 81.51px;
}

.theirShiftTextArea{ 
  position: relative;
  width: 300px;
  height: 30px;
  left: 534px;
  top: 79px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
}

.yourShiftTextArea{  

  position: relative;
  width: 300px;
  height: 30px;
  left: 184px;
  top: 99px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 21px;
  text-align: center;
  
  color: rgba(0, 0, 0, 0.5);
}




</style>
