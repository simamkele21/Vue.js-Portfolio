<template>
  <h1>About</h1>
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
            <div class="col-md-7 bio">
              <h2 class="title">Web Developer</h2>
              <hr />
              <p>
                Hello I'm Simamkele January, I enjoy being part of a progressive
                initiative where, if not all, a majority of participants
                benefit. I'm always ready to move out of my comfort zone, not
                only to learn but also to push my limits both physically and
                mentally. Although people see me as an extroverted person who is
                easy to communicate with, I see myself as an ambivert.
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
                  <th>Address: Cape Town. SA<br /></th>
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
      <!-- <MDBCard class="mb-3 card" style="max-width: 540px">
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
      </MDBCard> -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              :src="Testimonials.img"
              alt="Avatar"
              style="width: 300px; height: 300px"
            />
          </div>
          <div class="flip-card-back">
            <h1>{{ Testimonials.Name }}</h1>
            <p>{{ Testimonials.title }}</p>
            <p>{{ Testimonials.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Testimonials...</p>
  </div>
</template>
<script>
import // MDBRow,
// MDBCol,
// MDBCard,
// MDBCardImg,
// MDBCardBody,
// MDBCardTitle,
// MDBCardText,
"mdb-vue-ui-kit";

export default {
  components: {
    // MDBRow,
    // MDBCol,
    // MDBCard,
    // MDBCardImg,
    // MDBCardBody,
    // MDBCardTitle,
    // MDBCardText,
  },

  data() {
    return {
      Testimonials: [
        ],
    };
  },
  mounted() {
    fetch("https:backend-sima.herokuapp.com/Testimonials")
      .then((res) => res.json())
      .then((data) => {
        this.Testimonials = data;
        console.log(Testimonials);
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
.bio {
  text-align: left;
}
title {
  text-align: center;
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
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 15px 0px;
  margin: 0px 100px;
}
.flip-card {
  background-color: transparent;
  width: 355px;
  height: 355px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 350px;
  height: 355px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  object-fit: cover;
  padding-top: 22px;
}

.flip-card-back {
  background-color: rgb(219, 219, 189);
  color: white;
  transform: rotateY(180deg);
}
img {
  object-fit: cover;
}
</style>
