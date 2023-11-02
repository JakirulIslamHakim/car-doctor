import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow-x border">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl text-orange-500 font-semibold">
            Price : ${price}
          </p>
          <Link to={`/bookService/${_id}`}>
            <AiOutlineArrowRight className="w-10 h-6 text-orange-600 border bg-white hover:bg-orange-600 hover:text-white rounded-lg "></AiOutlineArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object,
};
