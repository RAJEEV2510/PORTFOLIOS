import React from "react";
import Title from "./Title";
import SmokeElement from "smoke-effect-react";
import email from "./email.png";
import phone from "./phone.png";
import map from "./map.png";

function Contactpage() {
  return (
    <div className="ContactPage">
      <Title title={"Contact Page"} span={"contact me"}></Title>
      <div className="map-sect">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.66183203424!2d76.8496629642827!3d28.423187823015287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620845202870!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "none", marginTop: "120px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-sect">
        <div>
          <ContactItem
            icon={phone}
            text={"+9185134071"}
            text2={"+918800382980"}
            title="Phone"
          ></ContactItem>
        </div>
        <div>
          <ContactItem
            icon={email}
            text={"rajeevupadhyay401@gmail.com"}
            text2={"rajeevupadhyay608@gmail.com"}
            title="Email"
          ></ContactItem>
        </div>
        <div>
          <ContactItem
            icon={map}
            text={"Gurugram (HR)"}
            text2={"haryana"}
            title="Address"
          ></ContactItem>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;

function ContactItem({ text, title, text2, icon }) {
  return (
    <div className="contact">
      <img src={icon}></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
