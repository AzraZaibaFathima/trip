
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact" >
      <h1 style={{color: "green"}}>Contact Us</h1>
      <br />
      <img className="contact-img" src="./Assests/img1.png" alt="" />
      <br />
      <br />
      <h1 style={{color: "purple"}}>MyTrip.com</h1>
      <br />
      <h2 style={{color: "grey"}}>For Booking Contact</h2>
      <br />
      <h5 style={{color: "blue"}}>Email : mytrip@gmail.com</h5>
      <h5>Phone : +91 9876543210</h5>
      <br />
      <h2 style={{color: "crimson"}}>Office Address</h2>
      <span>
        <h6>20 infantry road,</h6>
        <h6>Bangalore</h6>
      </span>
    </div>
  );
}

export default Contact;