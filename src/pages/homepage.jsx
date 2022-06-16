import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import RocketImage from "../assets/images/rocket.svg";
import { ServiceItems } from "../components/services/ServiceItems";
import CompanyServices from "../components/services/CompanyServices";

function Homepage() {
  const [scroll, setScroll] = useState(false)

  window.onscroll = (e) => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleScroll = () => {
    document.getElementsByTagName('html')[0].scrollIntoView({ behavior: "smooth" })
  }

  const services = ServiceItems.map((serviceItem) => {
    return (
      <CompanyServices
        key={serviceItem.index}
        image={serviceItem.imageSrc}
        imageName={serviceItem.imageName}
        title={serviceItem.title}
        description={serviceItem.description}
        serviceLink={serviceItem.link}
        className="services_extra"
      />
    );
  });

  return (
    <Fragment>
      {scroll && <BsFillArrowUpCircleFill onClick={handleScroll} className="scroll" />}
      <section className="home" id="home">
        <div className="content">
          <h3>The best organization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a
            fugit ipsum provident ab, vitae laborum sed illum quibusdam nulla.
          </p>
          <NavLink to={`/#`} className="btn">
            Read more
          </NavLink>
        </div>
        <div className="image">
          <img src={RocketImage} alt="rocket" />
        </div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </section>
      <section className="services">
        <h1 className="heading" style={{ marginTop: "7rem" }}>
          our <span>services</span>
        </h1>
        <div className="box-container services__extra">
          {services}
        </div>
      </section>
    </Fragment>
  );
}

export default Homepage;
