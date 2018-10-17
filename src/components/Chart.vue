<template>
    <div id="viz">
        <svg class = "chart" width = "300" height ="300">
          <rect class ="rec" x="50" y="20" width="150" height="150"/>
        </svg>
    </div>
</template>
<script>
const d3 = require("d3");
var data = [{"firstName":"Employee", "lastName":"1", "date":"2018-10-03", "startTime":"9:00", "endTime":"17:00"},
      {"firstName":"Employee", "lastName":"2", "date":"2018-10-03", "startTime":"9:00", "endTime":"17:00"},
      {"firstName":"Employee", "lastName":"3", "date":"2018-10-03", "startTime":"10:00", "endTime":"18:00"},
      {"firstName":"Employee", "lastName":"4", "date":"2018-10-03", "startTime":"13:00", "endTime":"21:00"},
      {"firstName":"Employee", "lastName":"5", "date":"2018-10-03", "startTime":"14:00", "endTime":"22:00"}];
export default {
  name: "Chart",
  data() {
    return {
      data: [{"firstName":"Employee", "lastName":"1", "date":"2018-10-03", "startTime":"9:00", "endTime":"17:00"},
      {"firstName":"Employee", "lastName":"2", "date":"2018-10-03", "startTime":"9:00", "endTime":"17:00"},
      {"firstName":"Employee", "lastName":"3", "date":"2018-10-03", "startTime":"10:00", "endTime":"18:00"},
      {"firstName":"Employee", "lastName":"4", "date":"2018-10-03", "startTime":"13:00", "endTime":"21:00"},
      {"firstName":"Employee", "lastName":"5", "date":"2018-10-03", "startTime":"14:00", "endTime":"22:00"}],
      line: '',
    };
  },
  methods:{
    viewBars(data){
      var x = d3.time.scale()		
				.domain([0,24])
        .range([0, width]);
      var y =d3.time.scale()
				.domain(dRange)
        .range([0, height]);
         
    },
  }
}
</script>

<style scoped>
.chart{
  background:green;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
}
.rec{
  background:dodgerblue;
  
  }
.axis path {
  fill: none;
  stroke: grey;
  shape-rendering: crispEdges;
}
.grid .tick {
  stroke: lightgrey;
  opacity: 0.8;
  stroke-dasharray: 2, 12;
}
.grid path {
  stroke-width: 0;
}
rect.times.bar {
  fill: #006d2c;
  fill-opacity: 0.5;
  stroke: #006d2c;
  stroke-width: 1px;
}
</style>
