<template>
  <section>
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
              <div class="col-md-7">
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
    <div class="testimonials" v-if="Testimonials.length">
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
  </section>
</template>
<script>
export default {
  data() {
    return {
      Testimonials: [
        // {
        //   Description:
        //     "He is a humble,kind and caring person who always does what is right, very dedicated to what he does and always trys to help others. Simamkele easly addapts to new situations and thinks quickly on his feet.To add to that he does not shy away from hard work and always puts his best foot foward",
        //   id: 1,
        //   img: "https://i.postimg.cc/kMQFYYXf/Na-aim1.jpg",
        //   Name: "Na-aim Fredericks",
        //   title: "Colleague",
        // },
        // {
        //   Description:
        //     "Simamkele is a hardworking person who always seeks help when stuck whick makes him a goal-driven person.",
        //   id: 2,
        //   img: "https://i.postimg.cc/kXBTDFyC/lilitha.jpg",
        //   Name: "Lilitha Ngele",
        //   title: "Colleague",
        // },
        // {
        //   Description:
        //     "Great humor and great person to work with. Always has a smile on his face and always works hard to finish the task at hand.",
        //   id: 3,
        //   img: "https://i.postimg.cc/9f73THtW/Muneeb3.jpg",
        //   Name: "Mogamat Muneeb Davids",
        //   title: "Colleague",
        // },
        // {
        //   Description:
        //     "Simamkele, the little man with big ideas. A very determined individual. You can always count on him to deliver good work. You Won't regret working with him!",
        //   id: 4,
        //   img: "https://i.postimg.cc/VNcgGyPs/Tursha.png",
        //   Name: "Tursha Arendse",
        //   title: "Colleague",
        // },
        // {
        //   Description:
        //     "Simamkele is a personable and easy to work with. He would be a valuable addition to your any coding team due to his personality.",
        //   id: 5,
        //   img: "https://i.postimg.cc/pdTrtrHs/Godwin.jpg",
        //   Name: "Godwin Dzapatsva",
        //   title: "Head of Curriculum and Learning",
        // },
        // {
        //   Description:
        //     "Simamkele is a bright individual. He analyses and continously finds ways to improve on himself and his technical abilities.",
        //   id: 6,
        //   img: "https://i.postimg.cc/Y2m49vmV/Alex.jpg",
        //   Name: "Alex Sexwale",
        //   title: "Senior Full-stack developer",
        // },
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
  gap: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 15px;
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
