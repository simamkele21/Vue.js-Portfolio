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
            {{ Projects.category }}
          </MDBCardText>
          <MDBBtn class="button" tag="a" :href="Projects.source" target="_blank"
            >Source</MDBBtn
          >
          <MDBBtn class="button" tag="a" :href="Projects.live" target="_blank"
            >Live</MDBBtn
          >
        </MDBCardBody>
      </MDBCard>
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
    fetch("https://backend-sima.herokuapp.com/projects")
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
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.img {
  width: 300px;
  height: 200px;
  filter: grayscale(100%);
  transition: all 0.5s linear;
}
img:hover {
  filter: none;
}
.button {
  background: #42b983;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #white;
  border-radius: 20px;
}
.card {
  background-color: rgba(151, 135, 135, 0.2);
}
</style>
