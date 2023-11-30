import { useState } from "react";
import "./Login.modules.css";
import backgroundGlobeVideo from "../../../assets/Videos/globe.webm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Alert } from "../../Components/Login/Alert";
export function Register() {
  const { signup } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-globe">
        <video
          src={backgroundGlobeVideo}
          className="background-video"
          autoPlay
          muted
        ></video>
      </div>
      <div className="login-form">
        <h2>REGISTER</h2>
        {error && <Alert message={error} />}
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="youremail@company.tld"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className=""
              placeholder="*************"
            />
          </div>

          <button className="">Register</button>
        </form>
        <p className="">
          Already have an Account?
          <Link to="/login" className="">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
