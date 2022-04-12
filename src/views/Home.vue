<template>
  <!-- <div id="home">
    <h1>Simamkele January</h1>
    <p>WEB DEVELOPER</p>
  </div> -->
  <section id="hero">
    <div class="hero-wrapper">
      <h2>Hello, I'm Simamkele January!</h2>
      <p>Aspiring Fullstack Developer based in Cape Town</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
/* #home {
  align-content: center;
  padding-top: 15%;
  height: 75.5vh;
} */
#hero {
  background: #f4f7ca url("https://mavisland.github.io/img/hero_image.jpg")
    center center no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 81vh;
  size: 120xp;
  padding-top: 350px;
}
#hero .hero-wrapper {
  bottom: 40%;
  font-size: 18px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  text-align: center;
  width: 50%;
  z-index: 3;
}
#hero .hero-wrapper h2 {
  text-transform: uppercase;
}
</style>
