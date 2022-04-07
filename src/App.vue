<template>
  <Navbar />
  <div class="">
    <router-view />
  </div>

  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f6f6f6;
  background-color: rgb(219, 219, 189);
}

#nav {
  padding: 30px;
  background-color: rgb(219, 219, 189);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  background-color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img:hover {
  filter: none;
}

/* .footer {
  left: 0;
  right: 0;
  bottom: 0px;
} */

@media only screen and (max-width: 600px) {
  #nav {
    padding: 0px;
    background-color: rgb(219, 219, 189);
  }
}
</style>
