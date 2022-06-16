import React, { Fragment, useState, useEffect } from "react";
import CompanyServices from "../components/services/CompanyServices";
import { ServiceItems } from "../components/services/ServiceItems";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Services() {
  const [filteredServices, setFilteredServices] = useState(null);
  const [error, setError] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setFilteredServices(ServiceItems);
  }, []);

  function handleSearchForServices(event) {
    var servicesArray = ServiceItems?.filter(function(service) {
      return service.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setSearchItem(event.target.value);
    setError(() => {
      if (servicesArray?.length > 0) {
        return null;
      } else {
        return "No services found!";
      }
    });
    setFilteredServices(servicesArray);
  }

  function handleFilterByTitle(event) {
    var servicesArray = ServiceItems?.filter(function(service) {
      return service.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    document.querySelector("[name='filterInput']").value = "";
    setError(null);
    setFilteredServices(servicesArray);
  }

  function handleReset() {
    setSearchItem("");
    setError(null);
    setFilteredServices(ServiceItems);
  }

  return (
    <Fragment>
      <section className="services">
        <h1 className="heading" style={{ marginTop: "7rem" }}>
          our <span>services</span>
        </h1>
        <div className="filter_service">
          <div className="filter_service_input">
            <AiOutlineSearch className="search_outline" />
            <input
              onChange={handleSearchForServices}
              value={searchItem}
              name="filterInput"
              type="text"
              placeholder="Search for a service..."
            />
            {searchItem && (
              <AiOutlineCloseCircle
                onClick={handleReset}
                className={`close-input`}
              />
            )}
          </div>
          <div>
            <select
              name="filter_select"
              className="filter_select"
              onChange={handleFilterByTitle}
            >
              <option value="">Filter by Title</option>
              <option value="Web Design">Web Design</option>
              <option value="Seo Marketing">Seo Marketing</option>
              <option value="Web Hosting">Web Hosting</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Ad Campaign">Ad Campaign</option>
              <option value="Content Marketing">Content Marketing</option>
            </select>
          </div>
        </div>
        {error && (
          <div className="services_error">
            <p>{error}</p>
          </div>
        )}
        <div className="box-container">
          {filteredServices?.map((service) => (
            <CompanyServices
              key={service.index}
              image={service.imageSrc}
              imageName={service.imageName}
              title={service.title}
              description={service.description}
              serviceLink={service.link}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Services;
