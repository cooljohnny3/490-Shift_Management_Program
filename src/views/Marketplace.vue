<template>
	<div class="marketplace">
    <MenuBar/>

    <div class="content">

		<h1>Marketplace</h1>

		<table id="listingtable" style="width:90%">
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

	<router-link to="marketplace/listing">
		<button id="newlisting" class="button">New Listing</button>
	</router-link>

	<NotificationButton/>
	</div>
	</div>
</template>

<script>

	import MenuBar from '@/components/MenuBar'
	import NotificationButton from '@/components/NotificationButton'

	export default
	{
		name: 'Marketplace',
		components:
		{
			MenuBar,
			NotificationButton
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