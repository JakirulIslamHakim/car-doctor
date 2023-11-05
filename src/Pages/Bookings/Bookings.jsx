import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const uri = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookings(data);
      });
  }, [uri]);

  const handleDeleteService = (id) => {
    const proceed = confirm("Are you sure Cancel this service ?");
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully Cancel this service");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    const proceed = confirm("Are You Sure ?");

    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            // update toast show
            const remaining = bookings.filter((booking) => booking._id !== id);
            const update = bookings.find((booking) => booking._id === id);
            update.status = "confirm";
            const newBookings = [update, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl text-center">
        Your Bookings : {bookings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Cancel</th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteService={handleDeleteService}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
