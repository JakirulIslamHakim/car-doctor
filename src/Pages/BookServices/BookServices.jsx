import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BookServices = () => {
  const bookService = useLoaderData();
  const { _id, title, img, price } = bookService;
  const { user } = useContext(AuthContext);

  const handleBookOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const order = {
      serviceName: title,
      customerName: name,
      customerEmail: email,
      date,
      price,
      img,
      serviceId: _id,
    };
    console.log(order);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) alert("Booking Successfully");
      });
  };

  return (
    <div>
      <div className="bg-black rounded-lg">
        <img className="w-full " src={checkout} alt="" />
      </div>
      <div className="bg-[#F3F3F3] md:p-10 my-5 rounded-xl">
        <h2 className="text-3xl text-center font-semibold">{title}</h2>
        <form onSubmit={handleBookOrder} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={"$ " + price}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary hover:bg-orange-500 bg-orange-700">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookServices;
