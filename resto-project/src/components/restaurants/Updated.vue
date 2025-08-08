<template>
  <HeaderPage />
  <h3>Hello Updated Restaurant page</h3>
</template>

<script>
import HeaderPage from "../layouts/Header.vue";
export default {
  name: "UpdatedPage",
  components: {
    HeaderPage,
  },
  mounted(){
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
  }
}
</script>