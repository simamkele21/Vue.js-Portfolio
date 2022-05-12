<template>
  <div v-if="Testimonials">
    <h1>{{ Testimonials.id }}</h1>
    <h1>{{ Testimonials.img }}</h1>
    <h3>{{ Testimonials.Name }}</h3>
    <h3>{{ Testimonials.title }}</h3>
    <h3>{{ Testimonials.Description }}</h3>

  </div>
  <div v-else>
    <p>Loading Testimonials data...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      Testimonials: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/Testimonials/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.Testimonials = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
