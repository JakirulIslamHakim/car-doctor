import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((err) => console.log(err));
  };

  const nabLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/bookings"}>My Bookings</NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 md:h-28 mb-5 border">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nabLink}
          </ul>
        </div>
        <Link to={"/"} className="btn outline btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabLink}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
