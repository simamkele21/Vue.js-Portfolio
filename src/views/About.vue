<template>
  <h1>About</h1>
  <div class="about">
    <div class="col-lg-5">
      <img
        src="https://i.postimg.cc/d36fX1Nw/image-removebg-preview.png"
        alt=""
      />
    </div>
    <div class="col-lg-7">
      <h1 class="mb-4 mt-5">Aspiering Web Designer & Developer</h1>

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
    </div>
  </div>

  <h1>Testimonials</h1>
  <div v-if="Testimonials.length">
    <div
      v-for="Testimonials of Testimonials"
      :key="Testimonials.id"
      class="Testimonials"
    >
      <MDBCard class="mb-3" style="max-width: 540px">
        <MDBRow class="g-0">
          <MDBCol md="4">
            <MDBCardImg :src="Testimonials.img" alt="..." />
          </MDBCol>
          <MDBCol md="8">
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
