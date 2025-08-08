<template>
  <HeaderPage />
  <h3 class="p-3 fs-1 fw-bold animated-letter" style="color: #2c3e50">Hello {{this.name}} welcome to home page</h3>
  <table class="table table-bordered" style="width: 90%; margin-left: auto; margin-right: auto;">
    <thead class="table-info text-center">
    <tr>
      <th style="width: 5px;">No.</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in restaurants" :key="item.id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td class="d-flex justify-content-center align-items-center gap-1">
        <router-link :to="'/update/' + item.id">
          <button class="btn btn-primary btn-sm rounded-md" data-bs-toggle="tooltip" data-bs-placement="top" title="This is a button edited!"> <i class="bi bi-pencil-square"></i></button>
        </router-link>
        <button v-on:click="deleteRestaurant(item.id)" class="btn btn-danger btn-sm rounded-md" data-bs-toggle="tooltip" data-bs-placement="top" title="This is a button deleted!"><i class="bi bi-trash3-fill"></i></button>
      </td>
    </tr>
    <tr v-if="restaurants.length === 0">
      <td colspan="5" class="text-center">No data</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import HeaderPage from "../layouts/Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: '',
      restaurants: [],
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user");
      if (!user) {
        this.$router.push({ name: "SignIn" });
      } else {
        this.name = JSON.parse(user).name;
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurants = result.data;
      }
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animated-letter {
  opacity: 0;
  display: inline-block;
  animation: fadeIn 0.5s ease-out forwards;
}
</style>