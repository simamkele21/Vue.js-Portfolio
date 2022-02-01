<template>
  <div id="nav">
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
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/simamkele21"
          role="button"
          ><i class="fab fa-github"></i
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
  /* background-image: url(https://i.postimg.cc/CM848fRZ/photo-1577017040065-650ee4d43339.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color: white; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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

.footer {
  left: 0;
  right: 0;
  bottom: 0px;
}
</style>
