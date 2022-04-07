<template>
  <section>
    <h1>About</h1>
    <div class="container bootstrap snippets bootdey">
      <div class="profile">
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
                <h2>Web Developer</h2>
                <hr />
                <p>
                  Hello I'm Simamkele January, I enjoy being part of a
                  progressive initiative where, if not all, a majority of
                  participants benefit. I'm always ready to move out of my
                  comfort zone, not only to learn but also to push my limits
                  both physically and mentally. Although people see me as an
                  extroverted person who is easy to communicate with, I see
                  myself as an ambivert.
                </p>
                <p>
                  My interest in web development started when I was a student in
                  high school. Then, after High School I started studying IT but
                  decided to rather pursue coding as I have found the coding
                  languages far more stimulating.
                </p>

                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Birthday:</strong> <span>25 December 1999</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Email:</strong>
                        <span>Simamkelejanuary@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Phone:</strong> <span>(+27) 65 518 3107</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>City:</strong> <span>Cape Town, SA</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />

    <h1>Testimonials</h1>
    <!-- <div class="testimonials" v-if="Testimonials.length">
      <div
        v-for="Testimonials of Testimonials"
        :key="Testimonials.id"
        class="Testimonials"
      >
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                :src="Testimonials.img"
                alt="Avatar"
                style="width: 300px; height: 300px"
              />
            </div>
            </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading Testimonials...</p>
    </div> -->
<div class="testimonial-box-container" v-if="Testimonials.length">
            <div class="testimonial-box" v-for="Testimonials of Testimonials"
        :key="Testimonials.id">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img  :src="Testimonials.img" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>{{ Testimonials.Name }}</strong>
                        </div>
                    </div>
                    <!--title------>
                    <div class="title">
                      <span>{{ Testimonials.title }}</span>
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p>{{ Testimonials.Description }}</p>
                </div>
            </div>
        </div>
          <div v-else>
      <p>Loading Testimonials...</p>
    </div> -->
                        
<!-- <div class="container testimonials" v-if="Testimonials.length">
    <div class="row"   v-for="Testimonials of Testimonials"
        :key="Testimonials.id">
        <div class="col-md-4 testimonial">
            <div class="row">
                <div class="avatar col-md-5">
                        <img class="img-circle" :src="Testimonials.img" alt="...">
                </div>
        
                <div class="testimonial-main col-md-7">
                    <h2 class="media-heading">{{ Testimonials.Name }}</h2>
                    <h1 class="testimony-body">{{ Testimonials.title }}</h1>
                </div>
            </div>
        </div>
    </div>
</div>                     -->
  </section>
</template>
<script>
export default {
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
.container {
  max-width: 1580px;
  height: 500px;
}
.bio {
  text-align: left;
}
h2 {
  align-content: center;
}
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

ul,
li {
  list-style-type: none;
}

.testimonials {
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 15px 0px;
  margin: 0px 100px;
}
/* .flip-card {
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
} */

#testimonials{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
}
.testimonial-heading{
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
.testimonial-heading span{
    font-size: 1.3rem;
    color: #252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.testimonial-box-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
}
.testimonial-box{
    width:500px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
}
.profile-img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}
.profile-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.profile{
    display: flex;
    align-items: center;
}
.name-user{
    display: flex;
    flex-direction: column;
}
.name-user strong{
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.name-user span{
    color: #979797;
    font-size: 0.8rem;
}
.title{
    color: #131313;
}
.box-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.client-comment p{
    font-size: 0.9rem;
    color: #4b4b4b;
}
.testimonial-box:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
}
 
@media(max-width:1060px){
    .testimonial-box{
        width:45%;
        padding: 10px;
    }
}
@media(max-width:790px){
    .testimonial-box{
        width:100%;
    }
    .testimonial-heading h1{
        font-size: 1.4rem;
    }
}
@media(max-width:340px){
    .box-top{
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .title{
        margin-top: 10px;
    }
}
::selection{
    color: #ffffff;
    background-color: #252525;
}    
</style>
