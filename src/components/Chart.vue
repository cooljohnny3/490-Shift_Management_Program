<template>
    <div class="chart">
      <svg>
        <g :d="xAxis"></g>
      </svg>
    </div>
</template>
<script>
const d3 = require("d3");

export default {
  name: "Chart",

  data() {
    this.$http
      .post("http://localhost:3000/full-schedule", {date: this.formatDate(this.date)})
      .then(response => {
        console.log(response.data.data);
        //this.data = response.data.data;
      })
      .catch(function(error) {
        console.error(error.response);
      });
    return {
      data: [],
      xAxis: ''
    }
  },

  props: {
    date: Date,
  },

  mounted() {
    //this.viewBars();
  },

  methods: {
    viewBars () {
    var first = d3.timeDay.floor( new Date(this.data[0].start)),
        last = d3.timeDay.ceil( new Date(this.data[this.data.length-1].stop)),
        dRange = [d3.min(this.data,function(d){
                    return d3.timeDay.floor(new Date(d.start))}), 
                  d3.max(this.data,function(d){
                    return d3.timeDay.ceil(new Date(d.stop))})];
			
		var m = {top: 40, right: 20, bottom: 20, left: 60},
        width = window.innerWidth*.8,
        barSize = 25,
        height = ((dRange[1]-dRange[0])/(24*60*60*1000))* barSize;
      /* set up scales */
			var x = d3.time.scale()		
				.domain([0,24])
				.range([0, width]);
			
			var y =d3.time.scale()
				.domain(dRange)
				.range([0, height]);

			var tfh = d3.time.scale()	//TwentyFourHour scale
				.domain([d3.timeHour(new Date(2014,0,1,0,0,0)),
					d3.time.hour(new Date(2014,0,2,0,0,0)),])
				.range([0,width]);
        /*add axes and grid*/
			var xAxis = d3.svg.axis()
				.scale(tfh)
				.tickFormat(d3.timeFormat("%H:%M"));
			var xGrid = d3.svg.axis()
				.scale(tfh)
				.orient("bottom")
				.ticks(12);
			var yAxis = d3.svg.axis()
				.scale(y)
        .tickFormat(d3.timeFormat("%m/%d"));
        
      this.xAxis.call(xAxis.orient("top"));
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
  },
}
</script>

<style scoped>

</style>
