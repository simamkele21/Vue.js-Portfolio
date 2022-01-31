<template>
  <h1>Projects</h1>
  <div class="projects" v-if="Projects.length">
    <div v-for="Projects of Projects" :key="Projects.id" class="Project">
      <MDBCard class="card">
        <a v-mdb-ripple="{ color: 'light' }">
          <MDBCardImg class="img" :src="Projects.img" top alt="..." />
        </a>
        <MDBCardBody>
          <MDBCardTitle>{{ Projects.title }}</MDBCardTitle>
          <MDBCardText>
            {{ Projects.details }}
          </MDBCardText>
          <MDBBtn tag="a" :href="Projects.github" color="primary"
            >Github</MDBBtn
          >
          <MDBBtn tag="a" :href="Projects.live" color="primary">Live</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <!-- </router-link> -->
    </div>
  </div>

  <div v-else>
    <p>Loading Projects...</p>
  </div>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
  mdbRipple,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
  },
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
  directives: {
    mdbRipple,
  },
};
</script>

<style>
.projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}
.img {
  width: 300px;
  height: 300px;
}
</style>
