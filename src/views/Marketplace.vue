<template>
	<div class="marketplace">
    <MenuBar/>

    <div class="content">
      <h1>Marketplace</h1>

      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      
      <Grid :data="gridData" :columns="gridColumns" :filterKey="searchQuery"></Grid>

      <router-link to="listing">
        <button id="newlisting" class="button">New Listing</button>
      </router-link>

	<NotificationButton/>
	</div>
	</div>
</template>

<script>

	import MenuBar from '@/components/MenuBar'
  import NotificationButton from '@/components/NotificationButton'
  import Grid from '@/components/Grid'

	export default
	{
		name: 'Marketplace',
		components:
		{
			MenuBar,
      NotificationButton,
      Grid
    },
    
    data() {
      this.getRows();
      return {
        searchQuery: '',
        gridColumns: [  
          'id',   
          'type',
          'first_name',
          'last_name',
          'date',
          'start_time',
          'end_time'],
          gridData: []
      }
  },

  methods: {
    getRows() {
      this.$http
        .post("http://localhost:3000/marketplace", {})
        .then(response => {
          let result = [];
          for(let i of response.data.data) {
            result.push(i);
          }
          this.gridData = result;
        })
        .catch(function(error) {
          console.error(error.response);
        });
    }
  }
	}

</script>

<style scoped>
	#listingtable
	{
		position: absolute;
		left: 100px;
		top: 300px;
		border-collapse: collapse;

		font-family: Roboto;

		opacity: 0.8;
	}

	#listingtable td, #listingtable th
	{
		border: 1px solid black;
		padding: 10px;
	}

	#listingtable tr:nth-child(even)
	{
		background-color: #B9E2FF;
	}

	#listingtable tr:nth-child(odd)
	{
		background-color: #D4EDFF;
	}

	#listingtable td:nth-child(8):hover
	{
		cursor: pointer;
		background-color: #59B9FF;
	}

	#listingtable th
	{
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
		background-color: #B9E2FF;
		color: black;
	}

	#newlisting
	{
		background-color: #59B9FF;
		position: absolute;
		left: 1271px;
		top: 250px;
		padding: 15px 70px;
	}

	.button
	{
		border: solid black;
		color: black;
		cursor: pointer;
		text-align: center;
		display: inline-block;
	}

</style>