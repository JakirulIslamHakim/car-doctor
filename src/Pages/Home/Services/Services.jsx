import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="my-10">
      <div className="text-center md:w-1/2 mx-auto space-y-4">
        <h2 className="text-2xl text-rose-500 font-bold">Services</h2>
        <h2 className="text-4xl  font-bold">Our Services Area</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          quisquam nulla facere ea commodi voluptatibus tempore, veniam
          laboriosam ducimus culpa?
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
