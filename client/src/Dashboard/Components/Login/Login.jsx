import { useState } from "react";
import "./Login.modules.css";
import backgroundGlobeVideo from "../../../assets/Videos/globe.webm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Alert } from "./Alert";
import { FcGoogle } from "react-icons/fc";
export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/admin");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
      } else {
        alert(error.message);
      }
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
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
        <h2>LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              className="input-email"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Escribe tu Email"
            />

            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="input-password"
              placeholder="*************"
            />
            <button onClick={handleGoogleSignin} className="login-google">
              <FcGoogle className="" />
              Sign in with Google
            </button>
          </div>
          <div className="">
            {/* <button className="" type="submit">
              Sign In
            </button>
            <a className="" href="" onClick={handleResetPassword}>
              Forgot Password?
            </a> */}
          </div>
        </form>

        {/* <p className="">
          Don't have an account?
          <Link to="/register" className="">
            Register
          </Link>
        </p> */}
      </div>
    </div>
  );
}

// import './Login.modules.css';
// import backgroundGlobeVideo from '../../../assets/Videos/globe.webm';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postLogin } from '../../../redux/actionsLogin';
// import { useNavigate } from 'react-router-dom';
// import handleGoogleLogin from './firebase';
// import validations from './validations';
// import ReCaptcha from 'react-google-recaptcha';

// let userInfo = null;

// const AdminLogin = () => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [userData, setUserData] = useState ({
//     login:'',
//     password:''
//   });

//   const [errors, setErrors] = useState ({
//     login:'',
//     password:''
//   })

//   const [recaptchaValue, setRecaptchaValue] = useState(null);

//   const handleChange = (event) => {
//     setUserData({
//       ...userData,
//       [event.target.name]: event.target.value
//     })

//     setErrors(validations({
//       ...userData,
//       [event.target.name]: event.target.value
//     }));
//   }

//   const handleRecaptchaChange = (value) => {
//     console.log("reCAPTCHA value:", value);
//     setRecaptchaValue(value);
//   };

//   const isFormValid = () => {
//     return (
//       !errors.login &&
//       !errors.password &&
//       userData.login &&
//       userData.password
//       // recaptchaValue
//     );
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // if (!recaptchaValue) {
//     //     console.error("reCAPTCHA not completed!");
//     //     return;
//     //   }

//     let postUserSuccess = false;

//     try {
//       userInfo = await dispatch(postLogin(userData));
//       localStorage.setItem('userInfo', JSON.stringify(userInfo));
//       postUserSuccess = true;
//     } catch (error) {
//       alert('Error:', error);
//     }

//     if (postUserSuccess) {
//       navigate('/admin');
//     }
//   };

//   const handleGoogleLoginClick = () => {
//     handleGoogleLogin(navigate);
//   };

//   return (
//     <div className='login-page'>
//       <div className='login-globe'>
//         <video src= {backgroundGlobeVideo} className="background-video" autoPlay muted></video>
//       </div>
//       <div className='login-form'>
//         <h2>LOG IN</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="login">login: </label>
//             <input
//               className='mail-field'
//               type="text"
//               name="login"
//               value={userData.login}
//               onChange={handleChange}
//             />
//             {errors.login && <p>{errors.login}</p>}
//             <br />
//             <label htmlFor="password">Password: </label>
//             <input
//               className='pass-field'
//               type="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <p>{errors.password}</p>}

//             {/* <ReCaptcha sitekey="6LcbvA8pAAAAAFRitKwzG7241KkzmRIoMY8mRhVz" onChange={handleRecaptchaChange} /> */}
//             <br />
//             <br />

//             <button
//               className={isFormValid() ? 'enabled-button' : 'disabled-button'}
//               disabled={!isFormValid()}>Submit
//             </button>

//             <button className="google-login-button" onClick={handleGoogleLoginClick}>
//               Log in with Google
//             </button>
//           </form>
//       </div>
//     </div>
//   )
// }

// export default AdminLogin
