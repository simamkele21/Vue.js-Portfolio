<template>
  <div id="nav">
    <div id="content">
      <a href="#" title="Title 1">
        <span>
          <i data-feather="home"></i>
        </span>
      </a>
      <a href="#" title="Title 2">
        <span>
          <i data-feather="cpu"></i>
        </span>
      </a>
      <a href="#" title="Title 3">
        <span>
          <i data-feather="sun"></i>
        </span>
      </a>
      <a href="#" title="Title 4">
        <span>
          <i data-feather="settings"></i>
        </span>
      </a>
      <a href="#" title="Title 5">
        <span>
          <i data-feather="refresh-ccw"></i>
        </span>
      </a>
    </div>

    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Education' }">Education</router-link> |
    <router-link :to="{ name: 'Projects' }">Projects</router-link> |
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </div>
  <router-view />

  <footer class="bg-dark text-center text-white footer">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/simamkele-january-4252b822b"
          role="button"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/simamkele21"
          role="button"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>

        <!-- Codepen -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://codepen.io/simamkele21"
          role="button"
          target="_blank"
          ><i class="fab fa-codepen"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
        >Simamkele January</a
      >
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(219, 219, 189);
}

#nav {
  padding: 30px;
  background-color: rgb(219, 219, 189);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  ]background-color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img {
  filter: grayscale(100%);
  transition: all 0.5s linear;
}

img:hover {
  filter: none;
}

/* .footer {
  left: 0;
  right: 0;
  bottom: 0px;
} */
</style>
