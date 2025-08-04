<template>
  <div class="nav">
    <div>
      <img class="logo" src="../assets/Restaurant_logo.png">
      <p class="restaurant">Restaurant Management</p>
    </div>
    <a v-on:click="logout" href="#">Logout</a>
    <router-link to="/create">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <router-link to="/home">Home</router-link>
  </div>
</template>
<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "SignIn" });
    }
  }
}
</script>
<style scoped>
.nav {
  background-color: #2c3e50;
  overflow: hidden;
}
.nav a {
  float: right;
  color: white;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.logo {
  float: left;
  width: 50px;
}
.restaurant{
  float: left;
  color: white;
  font-size: 16px;
}
.restaurant, .logo {
  margin-left: 15px;
}
.nav a:hover {
  background-color: #dddddd;
  color: #222;
}
</style>