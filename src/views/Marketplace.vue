<template>
  <div class="about">
    <h1>Marketplace</h1>
    <table id="listings" style="width:96%">
  <tr>
    <th>Type</th>
    <th>First Name</th> 
    <th>Last Name</th>
    <th>Day</th>
    <th>Date</th>
    <th>Start Time</th>
    <th>End Time</th>
    <th>Send Request</th>
  </tr>
  <tr>
    <td>Request</td>
    <td>Employee</td>
    <td>1</td> 
    <td>Monday</td>
    <td>10/15/2018</td>
    <td>2:00 PM</td>
    <td>9:00 PM</td>
    <td>Give</td>
  </tr>
  <tr>
    <td>Request</td>
    <td>Employee</td>
    <td>2</td> 
    <td>Tuesday</td>
    <td>10/16/2018</td>
    <td>9:00 AM</td>
    <td>5:00 PM</td>
    <td>Give</td>
  </tr>
  <tr>
    <td>Offer</td>
    <td>Employee</td>
    <td>3</td> 
    <td>Wednesday</td>
    <td>10/17/2018</td>
    <td>2:00 PM</td>
    <td>9:00 PM</td>
    <td>Take</td>
  </tr>
  <tr>
    <td>Offer</td>
    <td>Employee</td>
    <td>4</td> 
    <td>Thursday</td>
    <td>10/18/2018</td>
    <td>5:00 PM</td>
    <td>9:00 PM</td>
    <td>Take</td>
  </tr>
</table>
    <MenuBar/>
    <router-link to="marketplace/offer">
    <router-link to="marketplace/listing">
      <p>New Listing</p>
    </router-link>
  </router-link>
    <NotificationButton/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NotificationButton from '@/components/NotificationButton'

export default {
  name: 'Marketplace',
  components: {
    MenuBar,
    NotificationButton
  }
}
</script>

<style scoped>
#listings{
position: absolute;
width: 1000px;
height: 200px;
left: 50px;
top: 300px;
border-collapse: collapse;
}

#listings td, #listings th
{
  border: 1px solid black;
  padding: 8px;
}

#listings tr:nth-child(even)
{
  background-color: #B9E2FF;
}

#listings tr:nth-child(odd)
{
  background-color: #D4EDFF;
}

#listings tr:hover
{
  background-color: #59B9FF;
}

#listings th
{
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #B9E2FF;
  color: black;
}

/* Request 1 */

position: absolute;
width: 1334px;
height: 58px;
left: 113px;
top: 371px;



/* Rectangle */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 373px;

background: #D4EDFF;


/* Request: Employee 1 Monday 09/11/2018 2 am 9 am */

position: absolute;
width: 1301px;
height: 58px;
left: 146px;
top: 371px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;

color: #000000;

opacity: 0.8;


/* Give Button */

position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 382px;

box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1);


/* Rectangle */

position: absolute;
width: 134px;
height: 36px;
left: 1186px;
top: 382px;

background: #59B9FF;
border-radius: 31px;

/*givetake*/
position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 382px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;
text-align: center;

color: #000000;



/* Request 1.1 */

position: absolute;
width: 1334px;
height: 58px;
left: 113px;
top: 427px;



/* Rectangle */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 429px;

background: #B9E2FF;


/* Request: Employee 2 Tuesday 09/04/2018 9 am 5 pm */

position: absolute;
width: 1301px;
height: 58px;
left: 146px;
top: 427px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;

color: #000000;

opacity: 0.8;


/* Give Button */

position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 438px;

box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1);


/* Rectangle */

position: absolute;
width: 134px;
height: 36px;
left: 1186px;
top: 438px;

background: #59B9FF;
border-radius: 31px;

/* Title */

position: absolute;
width: 1334px;
height: 58px;
left: 113px;
top: 315px;



/* Rectangle */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 317px;

background: #B9E2FF;


/* Type: First Name: Last Name: Day: Date: Start: End: */

position: absolute;
width: 1301px;
height: 58px;
left: 146px;
top: 315px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
line-height: normal;
font-size: 24px;

color: #000000;

opacity: 0.8;


/* Offer 1 */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 485px;



/* Rectangle */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 485px;

background: #D4EDFF;


/* Offer: Employee 1 Monday 09/03/2018 2 am 9 am */

position: absolute;
width: 945px;
height: 29px;
left: 142px;
top: 498px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;

color: #000000;

opacity: 0.8;


/* Take Button */

position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 492px;

box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1);


/* Rectangle */

position: absolute;
width: 134px;
height: 36px;
left: 1186px;
top: 492px;

background: #59B9FF;
border-radius: 31px;

/* Offer 2 */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 539px;



/* Rectangle */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 539px;

background: #B9E2FF;


/* Take Button */

position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 546px;

box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1);


/* Rectangle */

position: absolute;
width: 134px;
height: 36px;
left: 1186px;
top: 546px;

background: #59B9FF;
border-radius: 31px;


/* Take */

position: absolute;
width: 198.66px;
height: 36px;
left: 1154px;
top: 546px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;
text-align: center;

color: #000000;



/* Offer: Employee 1 Monday 09/03/2018 2 am 9 am */

position: absolute;
width: 945px;
height: 29px;
left: 142px;
top: 550px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;

color: #000000;

opacity: 0.8;


/* Title Bar */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 261px;



/* Background */

position: absolute;
width: 1302px;
height: 56px;
left: 113px;
top: 261px;

background: #D4EDFF;


/* New Button */

position: absolute;
width: 218.66px;
height: 36px;
left: 1144px;
top: 265px;

box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1);


/* Rectangle */

position: absolute;
width: 173.91px;
height: 36px;
left: 1167.11px;
top: 265px;

background: #59B9FF;
border-radius: 31px;


/* New Listing */

position: absolute;
width: 218.66px;
height: 36px;
left: 1144px;
top: 265px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 24px;
text-align: center;

color: #000000;



/* Lines */

position: absolute;
width: 853.22px;
height: 281px;
left: 265px;
top: 315px;



/* Line */

position: absolute;
width: 279.01px;
height: 0px;
left: 265px;
top: 595px;

border: 1px solid #000000;
transform: rotate(-90deg);


/* Line 2 */

position: absolute;
width: 279px;
height: 0px;
left: 432px;
top: 595px;

border: 1px solid #000000;
transform: rotate(-90deg);


/* Line 3 */

position: absolute;
width: 277.01px;
height: 0px;
left: 587.22px;
top: 319px;

border: 1px solid #000000;
transform: rotate(90.46deg);


/* Line 3.1 */

position: absolute;
width: 277.01px;
height: 0px;
left: 726.22px;
top: 315px;

border: 1px solid #000000;
transform: rotate(90.46deg);


/* Line 3.2 */

position: absolute;
width: 277.01px;
height: 0px;
left: 910.22px;
top: 315px;

border: 1px solid #000000;
transform: rotate(90.46deg);


/* Line 3.3 */

position: absolute;
width: 277.01px;
height: 0px;
left: 1020.22px;
top: 315px;

border: 1px solid #000000;
transform: rotate(90.46deg);


/* Line 3.4 */

position: absolute;
width: 277.01px;
height: 0px;
left: 1118.22px;
top: 317px;

border: 1px solid #000000;
transform: rotate(90.46deg);

</style>