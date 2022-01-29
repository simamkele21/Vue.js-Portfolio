<template>
  <div v-if="Resume.length">
    <div v-for="Resume of Resume" :key="Resume.id" class="Resume">
      {{ Resume.institution }}
      <br />
      {{ Resume.year }}
      <br />
      {{ Resume.role }}
      <br />

      <div v-for="responsibility of Resume.responsibilities">
        {{ responsibility }}
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Projects...</p>
  </div>

  <br />

  <h2>My Skills</h2>
  <MDBRow class="Skills" style="max-width: 740px">
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/MHSyHVmb/access.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/Z5R6WTpg/bootstrap.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/K8HBLd5Y/html-5.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/J4RNW3nR/javascript-736400-960-720.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/3rXX6f3L/mysql.jpg
"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/BbB2KbhW/word.jpg"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>

    <div class="w-100 d-none d-md-block"></div>

    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/1zDwkNJw/download-removebg-preview-1.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/Pqn8Q5Tx/xa7en7o59vtxdhgte92u-removebg-preview.png"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
    <MDBCol col="6" sm="4"
      ><img
        src="https://i.postimg.cc/SNG5hJt0/download-1.jpg"
        alt=""
        class="img-fluid rounded"
    /></MDBCol>
  </MDBRow>
</template>

<script>
import { MDBCol, MDBRow } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCol,
    MDBRow,
  },

  data() {
    return {
      Resume: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Resume")
      .then((res) => res.json())
      .then((data) => (this.Resume = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
