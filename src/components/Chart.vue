<template>
    <div id="viz">
        <h1>CHART</h1>
    </div>
</template>
<script>
const d3 =require('d3');

export default {
    name: 'Chart',
    mounted() {
        var sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);    

    sampleSVG.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        .on("mouseout", function(){d3.select(this).style("fill", "white");})
    }
}

</script>
<style scoped>
    body {
		margin: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 13px;
		}
	
		.axis path {
			fill:none;
			stroke:grey;
			shape-rendering:crispEdges;
		}
		.grid .tick {
			stroke: lightgrey;
			opacity: 0.8;
			stroke-dasharray: 2,12;
		}
		.grid path {
		  stroke-width: 0;
		}
		rect.times.bar {
			fill:#006D2C;
			fill-opacity:0.5;
			stroke:#006D2C;
			stroke-width:1px;
		}
</style>
