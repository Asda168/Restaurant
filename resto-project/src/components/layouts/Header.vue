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
          <li>
            <router-link to="/" class="nav-link nav-item me-2">Home</router-link>
          </li>
          <li>
            <router-link to="/create" class="nav-link nav-item me-2">Add</router-link>
          </li>
          <li>
            <router-link to="/update" class="nav-link nav-item me-2">Update</router-link>
          </li>
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