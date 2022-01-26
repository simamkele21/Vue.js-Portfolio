<template>
  <div v-if="Projects">
    <h1>{{ Projects.title }}</h1>
    <p>The Project id is {{ id }}</p>
    <h1>{{ Projects.details }}</h1>
    <h3>{{ Projects.github }}</h3>
    <h3>{{ Projects.live }}</h3>
  </div>
  <div v-else>
    <p>Loading project data...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      Projects: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/Projects/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.Projects = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
