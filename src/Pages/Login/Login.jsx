import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row flex-col-revers gap-6 ">
        <div className="w-1/2 mr-12">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-4">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center my-4">Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-xl text-center">
              New to Car doctor.
              <Link
                className="text-orange-500 font-bold underline"
                to={"/singup"}
              >
                Singup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
