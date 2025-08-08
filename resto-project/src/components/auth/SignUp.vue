<template>
  <img class="logo" src="../../assets/Restaurant_logo.png">
  <h3>Sign Up</h3>
  <div class="register">
    <input type="name" v-model="name" placeholder="Enter your name" />
    <input type="email" v-model="email" placeholder="E-mail@gmail.com">
    <input type="password" v-model="password" placeholder="Enter your password" />
    <button v-on:click="SignUp" class="signup">SignUp</button>
    <p class="link-text">Back to <router-link to="/">Sign In</router-link></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      password: "",
      email: "",
    }
  },
  methods: {
    async SignUp() {
      console.warn("SignUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
        this.$router.push({name: 'SignIn'});
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>