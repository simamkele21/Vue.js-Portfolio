<template>
    <div class="row">
      <div class="col-lg-6 text">
        <h1>Resume</h1>
        <div v-if="Resume.length" class="length">
          <div
            v-for="Resume of Resume"
            :key="Resume.id"
            class="Resume"
          >
            <div class="card bg-light">
              <div class="card-header">{{ Resume.year }}</div>
              <div class="card-body">
                <h5 class="card-title">{{ Resume.institution }}</h5>
                <p>{{ Resume.role }}</p>
                <p class="card-text">
                  <div v-for="responsibility of Resume.responsibilities">
                      {{ responsibility }}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Loading Projects...</p>
        </div>
      </div>
      <div class="col-lg-6">
        <h1>My Skills</h1>
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
              src="https://i.postimg.cc/tCJ8z5KC/download.jpg"
              alt=""
              class="img-fluid rounded"
          /></MDBCol>
          <MDBCol col="6" sm="4"
            ><img
              src="https://i.postimg.cc/SNG5hJt0/download-1.jpg"
              alt=""
              class="img-fluid rounded"
          /></MDBCol>
          <MDBCol col="6" sm="4"
            ><img
              src="https://i.postimg.cc/YS6Xy3mL/index.png"
              alt=""
              class="img-fluid rounded"
          /></MDBCol>
        </MDBRow>
      </div>
    </div>
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
      Resume: [
      ],
    };
  },
  mounted() {
    fetch("https://backend-sima.herokuapp.com/Resume")
      .then((res) => res.json())
      .then((data) => {
        this.Resume = data;
        console.log(Resume);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.length{
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  /* margin-left: 105px */
}
.Resume  {
  margin: 0;
  list-style: none;
  position: relative;
  padding: 10px;
  color: rgb(3, 3, 3);
  font-size: 13px;
  width: 350px;
  display: flex;
  flex-wrap: wrap;
}


.img-fluid {
  width: 200px;
  height: 170px;
  border: 1px solid;
  padding: 5px;
  margin: 1%;
  border-radius: 10px;
  
}
.img-fluid {
  filter: grayscale(100%);
  transition: all 0.5s linear;
}
@media (max-width: 580px) {
.length{
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  overflow-x: none;
    margin-left: 25px

  }
.img-fluid {
  filter: grayscale(30%);
  transition: all 0.5s linear;
  max-width: 200px;
}

.row{
  display : flex;
}
}


</style>
