import React from "react";
// import yaml from "js-yaml";

function ServicesList({services}){


  return (
    <section id="services">
      <h3>What I can do</h3>
      <ul className="service-list">
        {services.map((service, index) => (
          <li>{service.service}</li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesList;
