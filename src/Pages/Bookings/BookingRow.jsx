const BookingRow = ({ booking, handleDeleteService, handleBookingConfirm }) => {
  const {
    customerName,
    servieName,
    serviceName,
    img,
    customerEmail,
    date,
    price,
    _id,
    status,
  } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteService(_id)}
            className="btn btn-circle btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-24 rounded h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <th>
        {status === "confirm" ? (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs text-orange-500 font-extrabold "
          >
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
