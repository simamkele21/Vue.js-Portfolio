<template>
  <MDBRow>
    <MDBCol col="6">
      <div class="sub-heading mb-20">
        <h3>Get In Touch</h3>
      </div>
      <p>
        For more information on any of our services or to talk about how we may
        be able to help you, please get in touch with us using the form
        opposite. Or you can call and follow our social media.
      </p>
      <ul class="contact-info">
        <li class="phone">
          <span class="title">Phone</span
          ><span class="value">(+27) 065 518 3107</span>
        </li>
        <li class="address">
          <span class="title">Address</span
          ><span class="value">
            4365 Ashely Kriel Street, Samora Machel, Cape town. SA</span
          >
        </li>
        <li class="email">
          <span class="title">E-mail</span
          ><span class="value">Simamkelejanuary@gmail.com</span>
        </li>
      </ul>
    </MDBCol>
    <MDBCol col="6">
      <div class="contact-form">
        <form action="https://formspree.io/f/xjvlyvjk" method="POST">
          <div class="half left cf">
            <input type="text" id="input-name" placeholder="Name" />
            <input type="email" id="input-email" placeholder="Email address" />
            <input type="text" id="input-subject" placeholder="Subject" />
          </div>
          <div class="half right cf">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" id="input-submit" />
        </form>
      </div>
    </MDBCol>
  </MDBRow>
</template>

<script>
import { MDBCol, MDBRow } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCol,
    MDBRow,
  },
};
</script>

<style>
form {
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
}
form input,
form textarea {
  border: 0;
  outline: 0;
  padding: 1em;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  font-family: "Merriweather", sans-serif;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  resize: none;
}
form input:focus,
form textarea:focus {
  -moz-box-shadow: 0 0px 2px #e74c3c !important;
  -webkit-box-shadow: 0 0px 2px #e74c3c !important;
  box-shadow: 0 0px 2px #e74c3c !important;
}
form #input-submit {
  color: white;
  background: #e74c3c;
  cursor: pointer;
}
form #input-submit:hover {
  -moz-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
  -webkit-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
}
form textarea {
  height: 126px;
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
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
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
</style>
