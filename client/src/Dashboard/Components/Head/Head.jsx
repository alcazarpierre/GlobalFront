import React, { useState } from "react";
import "./Head.modules.css";
import { useAuth } from "../../../context/AuthContext";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Head = () => {
  const { logout, user } = useAuth();
  const [contentLoaded, setContentLoaded] = useState(false);

  const handleContentLoad = () => {
    setContentLoaded(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={`head ${contentLoaded ? "loaded" : ""}`}>
      <div className="h2-foto">
        <div className="admin-name-logout">
          <h2 className={`bienvenido ${contentLoaded ? "visible" : ""}`}>
            Bienvenido, {user?.displayName || "Admin"}!
          </h2>
          <p
            onClick={handleLogout}
            className={`admin-logout ${contentLoaded ? "visible" : ""}`}
          >
            Logout <RiLogoutBoxRFill />
          </p>
        </div>

        {user?.photoURL && (
          <img
            className={`foto-admin ${contentLoaded ? "visible" : ""}`}
            src={user.photoURL}
            alt="admin"
            onLoad={handleContentLoad}
          />
        )}
      </div>
    </div>
  );
};

export default Head;

// import "./Head.modules.css";

// const Head = () => {
//   return (
//     <div className="head">
//       <div className="h2-foto">
//         <h2 className="bienvenido">Bienvenido, Admin!</h2>
//         <img
//           className="foto-admin"
//           src="https://th.bing.com/th/id/R.b84e94b34cf94cf7df6534beca0f18be?rik=A7grf4rTsFJAlQ&riu=http%3A%2F%2Fassets.stickpng.com%2Fthumbs%2F585e4beacb11b227491c3399.png&ehk=%2F7DjJ5adkIYfWfL4YSP4uLobeynRdeglnEPUcDrHr%2BM%3D&risl=&pid=ImgRaw&r=0"
//           alt="admin"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;
