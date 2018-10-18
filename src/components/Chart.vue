<template>
    <div id="viz">
      <svg class = "svg" width="500" height="270">
        <g class = "g" style="transform: translate(0, 10px)">
          <path class="path" :d="line" />
        </g>
      </svg>
    </div>
</template>
<script>
const d3 = require("d3");

export default {
  name: "Chart",
  /*data() {
    return {
      data: [
        {
          firstName: "Employee",
          lastName: "1",
          date: "2018-10-03",
          startTime: "9:00",
          endTime: "17:00"
        },
        {
          firstName: "Employee",
          lastName: "2",
          date: "2018-10-03",
          startTime: "9:00",
          endTime: "17:00"
        },
        {
          firstName: "Employee",
          lastName: "3",
          date: "2018-10-03",
          startTime: "10:00",
          endTime: "18:00"
        },
        {
          firstName: "Employee",
          lastName: "4",
          date: "2018-10-03",
          startTime: "13:00",
          endTime: "21:00"
        },
        {
          firstName: "Employee",
          lastName: "5",
          date: "2018-10-03",
          startTime: "14:00",
          endTime: "22:00"
        }
      ],
      line: ""
    };
  }, */
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
};
</script>

<style scoped>
.chart {
  background:white;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
}
.rec {
  background: dodgerblue;
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
.svg{
  margin: 25px;
}
.path{
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}
</style>
