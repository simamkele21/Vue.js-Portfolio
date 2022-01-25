<template>
  <h1>Projects</h1>
  <div v-if="Projects.length">
    <div v-for="Projects of Projects" :key="Projects.id" class="Project">
      <router-link
        :to="{ name: 'ProjectsDetails', params: { id: Projects.id } }"
      >
        <h2>{{ Projects.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading Projects...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Projects")
      .then((res) => res.json())
      .then((data) => (this.Projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
