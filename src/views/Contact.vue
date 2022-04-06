<template>
  <h1>Contact</h1>
  <!-- <div class="container contact">
    <div class="row">
      <div class="col-lg-12">
        <div class="sub-heading mb-20">
          <h3>Get In Touch</h3>
        </div>
        <p>
          For more information on any of my services or to talk about how I may
          be able to help you, please get in touch with me using the form below.
          Or you can call and follow my social media.
        </p>
      </div>
      <div class="col-lg-12">
        <div class="card mb-4">
          <h3>Message Me</h3>
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <label>Name</label>
              <input
                type="name"
                required
                v-model="name"
                placeholder="Enter name"
              />
              <label>Last Name</label>
              <input
                type="surname"
                required
                v-model="surname"
                placeholder="Enter last name"
              />
              <label>Email</label>
              <input
                type="email"
                required
                v-model="email"
                placeholder="Enter email"
              />
              <label>Messege</label>
              <input
                type="message"
                v-model="message"
                placeholder="Enter message"
              />
              <div class="submit">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
      <div class="row">
        <div class="col-md-5 text-center">
          <div id="details">
            <h1>CONTACT US</h1>
            <p>Cape Town South Africa</p>
            <p>simamkelejanuary@gmail.com</p>
            <p>065-518-3107</p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <label>Name</label>
              <input
                type="name"
                required
                v-model="name"
                placeholder="Enter name"
              />
              <label>Last Name</label>
              <input
                type="surname"
                required
                v-model="surname"
                placeholder="Enter last name"
              />
              <label>Email</label>
              <input
                type="email"
                required
                v-model="email"
                placeholder="Enter email"
              />
              <label>Messege</label>
              <input
                type="message"
                v-model="message"
                placeholder="Enter message"
              />
              <div class="submit">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import { MDBCol, MDBRow } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCol,
    MDBRow,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.name, this.surname, this.email, this.message);
      fetch("http://localhost:3000/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          surname: this.surname,
          email: this.email,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => alert(json.msg))
        .catch((e) => alert(e.msg));
    },
  },
};
</script>

<style>
.contact {
  /* border: 1px solid; */
  border-radius: 10px;
  min-height: 75vh;
  padding: 30px;
  align-content: center;
}
.contact-info {
  margin: 60px auto 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-gap: 20px;
  padding-left: 200px;
  padding-right: 200px;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}

@media (max-width: 480px) {

}

/* Clearfix */
.cf:before,
.cf:after {
  content: " ";
  /* 1 */
  display: table;
  /* 2 */
}

.cf:after {
  clear: both;
}

button {
  background: #42b983;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>
