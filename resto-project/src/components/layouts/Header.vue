<!--<template>-->
<!--  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">-->
<!--    <div class="d-flex align-items-center">-->
<!--      <img class="logo" src="../../assets/Restaurant_logo.png" alt="Restaurant Logo">-->
<!--      <p class="navbar-brand mb-0 ms-3">Restaurant Management</p>-->
<!--    </div>-->

<!--    <div class="ms-auto d-flex align-items-center">-->
<!--      <router-link to="/home" class="nav-link text-white me-2">Home</router-link>-->
<!--&lt;!&ndash;      <router-link to="/create" class="nav-link text-white me-2">Add Restaurant</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/update" class="nav-link text-white me-2">Update Restaurant</router-link>&ndash;&gt;-->
<!--      <a v-on:click="logout" href="#" class="nav-link text-white">Logout</a>-->
<!--    </div>-->
<!--  </nav>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "HeaderPage",-->
<!--  methods: {-->
<!--    logout() {-->
<!--      localStorage.clear();-->
<!--      this.$router.push({ name: "SignIn" });-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.navbar {-->
<!--  padding-top: 0.5rem;-->
<!--  padding-bottom: 0.5rem;-->
<!--}-->
<!--.navbar-brand {-->
<!--  font-size: 1rem;-->
<!--  font-weight: 500;-->
<!--  margin-left: 0.5rem;-->
<!--}-->
<!--.logo {-->
<!--  width: 40px;-->
<!--}-->
<!--.nav-link {-->
<!--  font-size: 0.9rem;-->
<!--  padding: 0.5rem 0.75rem; -->
<!--}-->
<!--</style>-->
<template>
  <header class="main-header navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">

      <div class="d-flex align-items-center">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <div class="logo-box">
            <img class="logo" src="../../assets/logo.png" alt="Logo">
          </div>
        </a>
        <ul class="navbar-nav d-none d-lg-flex flex-row gap-3">
          <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
          <router-link to="/update" class="nav-link nav-item me-2">Update</router-link>
          <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
          <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
          <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
          <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
        </ul>
      </div>
      <div class="d-flex align-items-center nav-item nav-link me-2">
        <a v-on:click="logout" href="#" class="nav-link text-white">Logout</a>
      </div>
    </div>
  </header>
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
.main-header {
  background-color: #6f42c1;
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-weight: 500;
}

.logo-box {
  color: #6f42c1;
  border-radius: 0.25rem;
  padding: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
}
.logo {
  width: 50px;
}
</style>