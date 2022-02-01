<template>
  <div class="container posts-content">
    <div class="row">
      <div class="col-lg-6 Resume">
        <h1>Resume</h1>
        <div v-if="Resume.length" class="length">
          <div
            v-for="Resume of Resume"
            :key="Resume.id"
            class="Resume col-lg-6"
          >
            <ul>
              <li>
                <span></span>
                <div>
                  <div class="title">{{ Resume.institution }}</div>
                  {{ Resume.year }}
                  <div class="info">{{ Resume.role }}</div>
                  <div class="type">
                    <div v-for="responsibility of Resume.responsibilities">
                      {{ responsibility }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p>Loading Projects...</p>
        </div>
      </div>
      <div class="col-lg-6">
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

<style>
.length {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 10px;
  /* padding: 1rem 80px; */
  font-size: 1.2rem;
}

.container ul {
  margin: 0;
  /* margin-top: 100px; */
  list-style: none;
  position: relative;
  padding: 10px;
  color: rgb(3, 3, 3);
  font-size: 13px;
}

.container ul li {
  position: relative;
  margin-left: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 14px;
  border-radius: 6px;
  width: 250px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
}
/* .container ul li:not(:first-child) {
  margin-top: 60px;
} */

/* .container div .title,
.container div .type {
  font-weight: 600;
  font-size: 12px;
} */
/* .container div .info {
  font-weight: 300;
} */
.container div > div {
  margin-top: 5px;
}

/* .Skills {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
} */
.img-fluid {
  width: 300px;
  height: 200px;
  border: 1px solid;
  padding: 50px;
  margin: 1%;
  border-radius: 10px;
}
</style>
