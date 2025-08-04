<template>
  <img class="logo" src="../assets/Restaurant_logo.png">
  <h3>Sign In</h3>
  <div class="register">
    <input type="email" v-model="email" placeholder="E-mail@gmail.com">
    <input type="password" v-model="password" placeholder="Enter your password" />
    <button v-on:click="SignIn" class="signup">Sign In</button>
    <p class="link-text">Don't have an account? <router-link to="/sign-up">Sign Up</router-link></p>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    async SignIn() {
      this.error = "";

      if (!this.email || !this.password) {
        this.error = "Email and password are required.";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.error = "Please enter a valid email address.";
        return;
      }

      try {
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user", JSON.stringify(result.data[0]));
          this.$router.push({ name: 'HomePage' });
        } else {
          this.error = "Invalid email or password.";
        }
      } catch (e) {
        this.error = "An error occurred during sign in. Please try again.";
        console.error(e);
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
.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>