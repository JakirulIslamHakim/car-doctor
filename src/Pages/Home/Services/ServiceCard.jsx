import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow-x border">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-xl text-orange-500 font-semibold">
          Price : ${price}
        </p>
        <div className="card-actions ">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}
