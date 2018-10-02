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
.login {
	background-image: url('../assets/Sign-in-background.png');
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.box1 {
  width: 30%;
  margin: auto;
  margin-top: 10rem;
	background-color: #BBDFF9; 
	text-align: center;
	border: 3px black solid;
  padding: 20px;
}
</style>
