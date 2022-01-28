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
          <div class="row clearfix">
            <div class="form-group col-md-6 col-sm-6 co-xs-12">
              <input
                type="text"
                name="name"
                value=""
                placeholder="Name"
                required
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 co-xs-12">
              <input
                type="email"
                name="email"
                value=""
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 co-xs-12">
              <input
                type="text"
                name="subject"
                value=""
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 co-xs-12">
              <input
                type="text"
                name="phone"
                value=""
                placeholder="Phone"
                required
              />
            </div>
            <div class="form-group col-md-12 col-sm-12 co-xs-12">
              <textarea name="message" placeholder="Massage"></textarea>
            </div>
            <div class="form-group col-md-12 col-sm-12 co-xs-12">
              <button type="submit" class="theme-btn btn-style-one">
                Send Now
              </button>
            </div>
          </div>
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

<style></style>
