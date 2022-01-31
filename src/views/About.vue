<template>
  <div class="row about-info mb-60">
    <div class="col-lg-5">
      <div class="about-img">
        <img
          src="https://i.postimg.cc/d36fX1Nw/image-removebg-preview.png"
          alt=""
        />
      </div>
    </div>

    <div class="col-lg-7">
      <h3 class="mb-20">Aspiering Web Designer & Developer</h3>
      <p>
        Hello I am <strong>Simamkele January</strong> enjoy being part of a
        progressive initiative where, if not all, a majority of participants
        benefit. I'm always ready to move out of my comfort zone, not only to
        learn but also to push my limits both physically and mentally. Although
        people see me as an extroverted person who is easy to communicate with,
        I see myself as an ambivert.
      </p>
      <h1 class="mb-4 mt-5">My passion for coding came from</h1>
      <p>
        My interest in web development started when I was a student in high
        school. Then, after High School I started studying IT but decided to
        rather pursue coding as I have found the coding languages far more
        stimulating.
      </p>
      <div class="row mb-20">
        <MDBRow class="justify-content-around">
          <MDBCol col="3">
            <ul>
              <li>Name: Simamkele January</li>
              <li>Age: 22 Years</li>
              <li>Email: Simamkelejanuary@gmail.com</li>
            </ul>
          </MDBCol>
          <MDBCol col="3">
            <ul>
              <li>Phone: (+27) 065 518 3107</li>
              <li>
                Address: 4365 Ashely Kriel Street, Samora Machel, Cape town. SA
              </li>
              <li>Freelance: Available</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  </div>

  <h1>Testimonials</h1>
  <div class="testimonials" v-if="Testimonials.length">
    <div
      v-for="Testimonials of Testimonials"
      :key="Testimonials.id"
      class="Testimonials"
    >
      <MDBCard class="mb-3 card" style="max-width: 540px">
        <MDBRow class="g-0">
          <MDBCol md="3">
            <MDBCardImg class="pic" :src="Testimonials.img" alt="..." />
          </MDBCol>
          <MDBCol md="9">
            <MDBCardBody>
              <MDBCardTitle>
                <h3>{{ Testimonials.Name }}</h3>
                <h3>{{ Testimonials.title }}</h3>
              </MDBCardTitle>
              <MDBCardText>
                {{ Testimonials.Description }}
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  </div>
  <div v-else>
    <p>Loading Testimonials...</p>
  </div>
</template>
<script>
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImg,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImg,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  },

  data() {
    return {
      Testimonials: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Testimonials")
      .then((res) => res.json())
      .then((data) => {
        this.Testimonials = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.about {
  display: flex;
}

.col-lg-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667;
}

.about-img {
  border: 10px solid rgba(23, 120, 231, 0.03);
  width: 100%;
  height: auto;
  align-content: center;
}
.MDBCol {
  display: flex;
  flex-wrap: wrap;
}

.testimonials {
  margin: 60px auto 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-gap: 20px;
  padding-left: 200px;
  padding-right: 200px;
}

.pic {
  /* width: 300px;
  height: 300px; */
}
</style>
