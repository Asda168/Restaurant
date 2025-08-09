<template>
  <HeaderPage />
  <div class="container mt-4">
    <h3 class="text-center my-4 fw-bold">Add New Restaurant</h3>
    <form @submit.prevent="addRestaurant" class="bg-light p-4 rounded shadow-sm mx-auto" style="max-width: 600px;">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter restaurant name" v-model="restaurant.name" required>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" placeholder="Enter address" v-model="restaurant.address" required>
      </div>
      <div class="mb-3">
        <label for="contact" class="form-label">Contact</label>
        <input type="text" class="form-control" id="contact" placeholder="Enter contact info" v-model="restaurant.contact" required>
      </div>
      <button type="submit" class="btn btn-success w-100">Add Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "../layouts/Header.vue";
import axios from "axios";

export default {
  name: "CreatedPage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async addRestaurant() {
      if (!this.restaurant.name || !this.restaurant.address || !this.restaurant.contact) {
        alert("Please fill in all fields.");
        return;
      }
      try {
        const result = await axios.post("http://localhost:3000/restaurant", {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });

        if (result.status === 201) {
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error("Error adding restaurant:", error);
        alert("Failed to add restaurant. Please try again.");
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
  }
}
</script>
