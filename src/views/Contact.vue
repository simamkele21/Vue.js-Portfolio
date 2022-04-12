<template>
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
  <div class="container sim">
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
          <form id="form" class="topBefore">
		  <input id="name" type="text" placeholder="NAME">
      		  <input id="surname" type="text" placeholder="LAST NAME">
		  <input id="email" type="text" placeholder="E-MAIL">
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
  <input id="submit" type="submit" value="GO!">
</form>
          <!-- <div class="contact-form">
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
          </div> -->
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
.sim {
  height: 81vh;
}
#details {
  height: 0;
  overflow: none;
  padding-bottom: 22.25%;
  margin-top: 190px;
  position: relative;
}
.col-md-5 {
    flex: 0 0 auto;
    width: 41.7777;
}
.col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
    margin-top: 85px;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  color: #bbb5af;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {
  color: #bbb5af;
}

input::placeholder, textarea::placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::placeholder, textarea::focus:placeholder {
  color: #bbb5af;
}

input::-ms-placeholder, textarea::-ms-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-ms-placeholder, textarea:focus::-ms-placeholder {
  color: #bbb5af;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {
  color: #cbc6c1;
}

input:hover::-moz-placeholder, textarea:hover::-moz-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {
  color: #cbc6c1;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::placeholder, textarea:hover:focus::placeholder {
  color: #cbc6c1;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {
  color: #cbc6c1;
}


#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;display: flex;flex-wrap: wrap;
}

input {
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;
  
  background: transparent;
  outline: none;
  color: #726659;
  
  border: solid 1px #b3aca7;
  border-bottom: none;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #b3aca7;
  color: #e2dedb;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  
  background: transparent;
  outline: none;
  
  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  
  border: solid 1px #b3aca7;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #b3aca7;
  color: #e2dedb;
}

#submit {
  width: 470px;
  
  padding: 0;
  margin: -5px 0px 0px 0px;
  
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #b3aca7;
  
  outline:none;
  cursor: pointer;
  
  border: solid 1px #b3aca7;
  border-top: none;
}

#submit:hover {
  color: #e2dedb;
}

@media (max-width: 580px){
  .col-md-5 {
      flex: 0 0 auto;
      width: 41.7777;
  }
  .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
      margin-top: 85px;
  }
}


/* .contact {
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
  background: rgba(151, 135, 135, 0.2);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  font-size: 20px;
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

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}

.cf:before,
.cf:after {
  content: " ";
  display: table;
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

@media (max-width: 580px) {
.sim{
height:137.9;
} */

</style>
