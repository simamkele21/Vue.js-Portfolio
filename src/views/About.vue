<template>
  <div class="container bootstrap snippets bootdey">
    <div class="profile card">
      <div class="profile-body">
        <div class="profile-bio">
          <div class="row">
            <div class="col-md-5 text-center">
              <img
                class="img-thumbnail md-margin-bottom-10"
                src="https://i.postimg.cc/d36fX1Nw/image-removebg-preview.png"
                alt=""
              />
            </div>
            <div class="col-md-7">
              <h2>Simamkele January</h2>
              <hr />
              <p>
                I enjoy being part of a progressive initiative where, if not
                all, a majority of participants benefit. I'm always ready to
                move out of my comfort zone, not only to learn but also to push
                my limits both physically and mentally. Although people see me
                as an extroverted person who is easy to communicate with, I see
                myself as an ambivert.
              </p>
              <p>
                My interest in web development started when I was a student in
                high school. Then, after High School I started studying IT but
                decided to rather pursue coding as I have found the coding
                languages far more stimulating.
              </p>

              <table style="width: 100%">
                <tr>
                  <th>Phone: (+27) 065 518 3107</th>
                  <th>Email: Simamkelejanuary@gmail.com</th>
                </tr>
                <tr>
                  <th>Age: 22 Years</th>
                  <th>
                    Address: 4365 Ashely Kriel Street,<br />
                    Samora Machel, Cape town. SA
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />

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
            <MDBCardBody style="height: 440px">
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
.card {
  -moz-border-radius: 2%;
  -webkit-border-radius: 2%;
  border-radius: 2%;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.08);
}

.profile .profile-body {
  padding: 20px;
  background: #f7f7f7;
}

.profile .profile-bio {
  background: #fff;
  position: relative;
  padding: 15px 10px 5px 15px;
}

.profile .profile-bio a {
  left: 50%;
  bottom: 20px;
  margin: -62px;
  text-align: center;
  position: absolute;
}

.profile .profile-bio h2 {
  margin-top: 0;
  font-weight: 200;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #585f69;
  margin-top: 5px;
  text-shadow: none;
  font-weight: normal;
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-size: 24px;
  line-height: 33px;
}

p,
li,
li a {
  color: #555;
}

.testimonials {
  margin: 60px auto 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-gap: 20px;
  padding-left: 200px;
  padding-right: 200px;
}
</style>
