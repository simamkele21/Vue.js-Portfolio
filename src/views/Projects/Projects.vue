<template>
  <h1>Projects</h1>
  <div v-if="Projects.length">
    <div v-for="Projects of Projects" :key="Projects.id" class="Project">
      <!-- <router-link
        :to="{ name: 'ProjectsDetails', params: { id: Projects.id } }"
      > -->
        <!-- <h2></h2>
        <h2>{{ Projects.category }}</h2>
        <h2>{{ Projects.details }}</h2>
        <button>{{ Projects.github }}</button>
        <h2>{{ Projects.live }}</h2> -->
        <MDBCard>
          <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg
              :src="Projects.img"
              top
              alt="..."
            />
          </a>
          <MDBCardBody>
            <MDBCardTitle>{{ Projects.title }}</MDBCardTitle>
            <MDBCardText>
              {{ Projects.details }}
            </MDBCardText>
            <MDBBtn tag="a" :href="Projects.github" color="primary">Button</MDBBtn>
            <MDBBtn tag="a" href="{{ Projects.live }" color="primary">Button</MDBBtn>
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

<style></style>
