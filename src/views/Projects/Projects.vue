<template>
  <h1>Projects</h1>
  <div class="projects" v-if="Projects.length">
    <div v-for="Projects of Projects" :key="Projects.id" class="Project">
      <MDBCard class="card">
        <a v-mdb-ripple="{ color: 'light' }">
          <MDBCardImg class="img" :src="Projects.img" top alt="..." />
        </a>
        <MDBCardBody>
          <MDBCardTitle>{{ Projects.title }}</MDBCardTitle>
          <MDBCardText>
            {{ Projects.category }}
          </MDBCardText>
          <MDBBtn
            tag="a"
            :href="Projects.source"
            color="primary"
            target="_blank"
            >Source</MDBBtn
          >
          <MDBBtn tag="a" :href="Projects.live" color="primary" target="_blank"
            >Live</MDBBtn
          >
        </MDBCardBody>
      </MDBCard>
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
      Projects: [
        // {
        //   img: "https://i.postimg.cc/ZRWhVvKX/project.png",
        //   title: "MOCK PROJECT",
        //   id: 1,
        //   category: "HTML & CSS",
        //   source: "https://github.com/simamkele21/project",
        //   live: "https://eloquent-babbage-f22814.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/9f8hdYVG/onlinestore.png",
        //   title: "ONLINE STORE",
        //   id: 2,
        //   category: "HTML & CSS",
        //   source: "https://github.com/simamkele21/project",
        //   live: "https://agitated-clarke-7afb9c.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/ZY1JsHNH/mediaq.png",
        //   title: "MEDIA QUERIES",
        //   id: 3,
        //   category: "HTML & CSS",
        //   source: "https://github.com/simamkele21/Media-Queries",
        //   live: "https://gallant-wright-e119ca.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/sgJyXRNH/fc.png",
        //   title: "Flipcards",
        //   id: 4,
        //   category: "HTML & CSS",
        //   source: "https://github.com/simamkele21/flipcards",
        //   live: "https://stoic-shannon-5c2e3b.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/02jSjGxR/Screenshot-from-2022-02-01-09-38-05.png",
        //   title: "Box Model",
        //   id: 5,
        //   category: "HTML & CSS",
        //   source: "https://github.com/simamkele21/boxmodel",
        //   live: "https://keen-ptolemy-759e53.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/DZFSQLXg/Screenshot-from-2022-02-01-09-09-01.png",
        //   title: "Reaction timer",
        //   id: 6,
        //   category: "Vue",
        //   source: "https://github.com/simamkele21/Reaction-timer",
        //   live: "https://awesome-leakey-bcfbbb.netlify.app/",
        // },
        // {
        //   img: "https://i.postimg.cc/xdH2fZqx/Screenshot-from-2022-02-01-09-21-33.png",
        //   title: "Kanye West API",
        //   id: 7,
        //   category: "Javascript",
        //   source: "https://codepen.io/simamkele21/pen/vYejjYr",
        //   live: "https://codepen.io/simamkele21/pen/vYejjYr",
        // },
        // {
        //   img: "https://i.postimg.cc/ryHh8NR3/Screenshot-from-2022-02-01-10-14-24.png",
        //   title: "Embeding",
        //   id: 8,
        //   category: "Javascript",
        //   source: "https://codepen.io/simamkele21/pen/WNOVwjO",
        //   live: "https://codepen.io/simamkele21/pen/WNOVwjO",
        // },
        // {
        //   img: "https://i.postimg.cc/4NjRBK20/Screenshot-from-2022-02-04-15-50-09.png",
        //   title: "Text effects",
        //   id: 9,
        //   category: "Javascript",
        //   source: "https://codepen.io/simamkele21/pen/WNZyBdp",
        //   live: "https://codepen.io/simamkele21/pen/WNZyBdp",
        // },
        // {
        //   img: "https://i.postimg.cc/d1Nx3Xzf/Screenshot-from-2022-02-04-15-53-14.png",
        //   title: "Pokemon API",
        //   id: 10,
        //   category: "Javascript",
        //   source: "https://codepen.io/simamkele21/pen/eYGKZmy",
        //   live: "https://codepen.io/simamkele21/pen/eYGKZmy",
        // },
      ],
    };
  },
  mounted() {
    fetch("https://backend-sima.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => (this.Projects = data))
      .catch((err) => console.log(err.message));
  },
  directives: {
    mdbRipple,
  },
};
</script>

<style>
.projects {
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.img {
  width: 300px;
  height: 200px;
  filter: grayscale(100%);
  transition: all 0.5s linear;
}
img:hover {
  filter: none;
}
@media screen and (min-width: 100px) and (max-width: 799px);
</style>
