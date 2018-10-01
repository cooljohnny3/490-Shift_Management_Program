<template>
  <div class="login">
		<div class="box1">
			<h1>
				SKEJ
			</h1>
				
			<form method="Post">
				<div>
					<input v-model="username" type="text" placeholder = "Username">
				</div>
				<div>
					<input v-model="password" type="Password" placeholder = "Password">
				</div>
				<br>
				<button>Log in</button>
				<button>Forgot Password</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>
body {
	background-image: url('../assets/Sign-in-background.png');
	background-repeat: no-repeat;
  background-size: cover;
}

.container {
	position: center;
	width: 500px;
	margin: auto;
	padding: 20%;
	
}

.box1 {
	background-color: #BBDFF9; 
	text-align: center;
	border: 3px black solid;
	padding: 20px;
	margin: 0; 
}

.box1 #loginbtn {
	border-left-width: 3px;
	padding: 5px;

}

.box1 #forgotbtn {
	border-left-width: 3px;
	padding: 5px;

}
</style>
