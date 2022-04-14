<template>
  <!--<form @submit.prevent="handleSubmit">
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
 -->
  <div class="container sim">
      <div class="row">
        <div class="col-md-5 text-center">
          <div id="details">
            <h1>CONTACT US</h1>
            <p>Cape Town South Africa</p>
            <p>simamkelejanuary@gmail.com</p>
            <p>065-518-3107</p>
             <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/simamkele-january-4252b822b"
          role="button"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/simamkele21"
          role="button"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>

        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://codepen.io/simamkele21"
          role="button"
          target="_blank"
          ><i class="fab fa-codepen"></i
        ></a>
          </div>
        </div>
        <div class="col-md-7">
          <form id="form" class="topBefore" @submit.prevent="handleSubmit">
		  <input id="name" type="text" v-model="name" placeholder="NAME" required>
      		  <input id="surname" type="text" v-model="surname" placeholder="LAST NAME" required>
		  <input id="email" type="email" v-model="email" placeholder="E-MAIL" required>
		  <textarea id="message" type="message" v-model="message" placeholder="MESSAGE" required></textarea>
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
      fetch("https://backend-sima.herokuapp.com/Contact", {
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
        .then((json) => {
          console.log(json);
          alert(json.msg)
          })
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
.btn{
  color: #726659;
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

</style>
