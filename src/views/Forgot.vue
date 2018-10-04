<template>
  <div class="forgot">
            <div class="box1">
                <h1>
                    SKEJ
                </h1>
                    
                <div class="buttons">
                <router-link to="/login">
                <button>Return to log in</button>
                </router-link>
            </div>
		</div>
	</div>
</template>

<script>
export default{
    name: "Forgot"
}
</script>

<style scoped>
.forgot {
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
  min-width: 150px; /* minimum width so box does not become incredibly small when resizing the window*/
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

.buttons button {
  margin: 3px;
}
</style>