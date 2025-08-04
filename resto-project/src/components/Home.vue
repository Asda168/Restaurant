<template>
  <HeaderPage />
  <h3>Hello {{this.name}} welcome to home page</h3>
  <table class="table table-bordered border-primary">
    <thead>
    <tr>
      <th class="text-center">No.</th>
      <th class="text-center">Name</th>
      <th class="text-center">Address</th>
      <th class="text-center">Contact</th>
      <th class="text-center">Actions</th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
    <tr v-for="(item, index) in restaurants" :key="item.id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td class="text-center">
        <router-link :to="'/update/' + item.id">
          <button class="action-btn edit-btn">Edit</button>
        </router-link>
        <button v-on:click="deleteRestaurant(item.id)" class="action-btn delete-btn">Delete</button>
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
import HeaderPage from "./Header.vue";
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
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.table th, .table td {
  border: 1px solid #e0e0e0;
  padding: 12px 15px;
  text-align: left;
}
.table thead th {
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}
.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
.table tbody tr:hover {
  background-color: #f0f0f0;
}
.table th:first-child, .table td:first-child {
  width: 50px;
  text-align: center;
}
.action-btn {
  padding: 5px 10px;
  margin-right: 5px;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.edit-btn {
  background-color: #4CAF50;
}
.delete-btn {
  background-color: #f44336;
}
.edit-btn:hover {
  background-color: #45a049;
}
.delete-btn:hover {
  background-color: #d32f2f;
}
.text-center {
  text-align: center;
}
</style>