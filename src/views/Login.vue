<template>
  <div class="login">
      <div class="box1">
        <h1>
          SKEJ
        </h1>
        <form>
          <div class="input">
            <input v-model="email" type="text" placeholder = "Email" required autofocus><br>
            <input v-model="password" type="Password" placeholder = "Password" required>
          </div>
          <div class="buttons">
            <button type="submit" v-on:click="handleSubmit">Log in</button>
            <!--
            <router-link to="/forgot">
              <button>Forgot Password</button>
            </router-link>
            -->
          </div>
          <p v-show="failedLogin">Login Failed</p>
        </form>
		</div>
	</div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      failedLogin: false
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // TODO make more secure
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);
            if (localStorage.getItem("jwt") != null) {
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/");
              }
            }
          })
          .catch((error) => {
            this.failedLogin = true;
            console.error(error.response);
          });
      }
    }
  }
};
</script>

<style scoped>
.login {
  background-image: url("../assets/Sign-in-background.png");
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.box1 {
  width: 30%;
  min-width: 150px; /* minimum width so box does not become incredibly small when resizing the window*/
  margin: auto;
  margin-top: 10rem;
  background-color: #bbdff9;
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
