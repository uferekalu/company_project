import React, { Fragment } from "react";

function ContactUs() {
  return (
    <section className="contact" id="contact">
      <Fragment>
        <h1 className="heading" style={{ marginTop: "7rem" }}>
          <span>contact</span> us
        </h1>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>our number</h3>
            <p>+234-70-329-36214</p>
            <p>+234-81-301-49426</p>
          </div>
          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>our email</h3>
            <p className="custom_email">uferepeace@gmail.com</p>
            <p className="custom_email">dekalusha@gmail.com</p>
          </div>
          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>our location</h3>
            <p>Lagos, Lagos - Nigeria</p>
          </div>
        </div>
        <div className="row">
          <iframe
            className="map"
            src="https://maps.google.com/maps?q=Olokonla%20Lekki%20epe,%20Lagos%20-%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowfullscreen=""
            loading="lazy"
            title="location"
          ></iframe>
          <form action="">
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="number" className="box" />
            <textarea
              name=""
              placeholder="message"
              className="box"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </Fragment>
    </section>
  );
}

export default ContactUs;
