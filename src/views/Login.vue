<template>
  <div class="login">
		<div class="box1">
			<h1>
				SKEJ
			</h1>
				<div class="input">
					<input v-model="username" type="text" placeholder = "Username"><br>
					<input v-model="password" type="Password" placeholder = "Password">
				</div>
        <div class="buttons">
          <router-link to="/">
            <button>Log in</button>
          </router-link>
          <router-link to="/forgot">
            <button>Forgot Password</button>
          </router-link>
        </div>
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

h1 {
  margin-bottom: 5px;
}

.input {
  margin-bottom: 5px;
}

.input input {
  margin: 3px;
}

.buttons button {
  margin: 3px;
}
</style>
