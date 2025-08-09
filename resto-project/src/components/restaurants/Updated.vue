<template>
  <HeaderPage />
  <div class="container mt-4">
    <h3 class="text-center my-4 fw-bold">Update Restaurant</h3>
    <!-- Form for updating a restaurant, pre-filled with existing data -->
    <form @submit.prevent="updateRestaurant" class="bg-light p-4 rounded shadow-sm mx-auto" style="max-width: 600px;">
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
      <button type="submit" class="btn btn-primary w-100">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "../layouts/Header.vue";
import axios from "axios";

export default {
  name: "UpdatedPage",
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
    async updateRestaurant() {
      // First, get the restaurant ID from the current URL's parameters.
      const restaurantId = this.$route.params.id;
      try {
        // Then, send a PUT request to the server with the updated data.
        const result = await axios.put(`http://localhost:3000/restaurant/${restaurantId}`, {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });

        // If the update is successful (status 200), navigate back to the home page.
        if (result.status === 200) {
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error("Error updating restaurant:", error);
        alert("Failed to update restaurant. Please try again.");
      }
    }
  },
  async mounted() {
    // First, check if a user is logged in. If not, redirect to the SignIn page.
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignIn" });
      return; // Stop the function if no user is found.
    }

    // When the component loads, get the restaurant's ID from the URL.
    const restaurantId = this.$route.params.id;
    try {
      // Fetch the data for that specific restaurant from the server.
      let result = await axios.get(`http://localhost:3000/restaurant/${restaurantId}`);
      // Assign the fetched data to the 'restaurant' object, which populates the form fields via v-model.
      this.restaurant = result.data;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
}
</script>

<style scoped>
/* Using Bootstrap utility classes for styling, so no custom CSS is needed here. */
</style>
