//Sugiero separar los imports, primero los de funcionalidad, segundo los que pertenezcan a la página y tercero, los que pertenezcan al dashboard.
//Borrar los comments cuando sea necesario

//Imports generales y de funcionalidad:
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./Dashboard/Components/Login/ProtectedRoute";

//Imports de Main Page:
import NavBarHome from "./WebPage/Components/NavBarWPG/NavBarWPG";
import Home from "./WebPage/Components/Home/Home";
import Contacto from "./WebPage/Components/Contacto/Contacto";
import Footer from "./WebPage/Components/FooterWPG/FooterWPG";
import Nosotros from "./WebPage/Components/Nosotros/Nosotros";
import Proyectos from "./WebPage/Components/Proyectos/Proyectos";
import Equipoweb from "./WebPage/Components/EquipoWeb/Container/Equipoweb";
import Donaciones from "./WebPage/Components/Donaciones/Donaciones";
import Stories from "./WebPage/Components/Nosotros/Historias/CardsStoriesContainer/StoriesContainer";
import Achievements from "./WebPage/Components/Proyectos/Logros/CardsAchievementsContainer/AchievementsContainer";
import Novedades from "./WebPage/Components/Novedades/Novedades";
import FAQS from "./WebPage/Components/FAQS/FAQS";
import DonacionEnEspecies from "./WebPage/Components/Donaciones/DonacionesEspecies/EspeciesForm";
import DonacionUnica from "./WebPage/Components/Donaciones/DonacionMP/DonacionUnica";

//Imports del Dashboard:
//import Logout from "./Dashboard/Components/Login/Logout";
import { Login } from "./Dashboard/Components/Login/Login";
import { Register } from "./Dashboard/Components/Login/Register";
import HomeDashboard from "./Dashboard/Components/Home/HomeDash";
import NavBarDashboard from "./Dashboard/Components/NavBar/Navbar";
import Head from "./Dashboard/Components/Head/Head";
import TeamContainer from "./Dashboard/Components/Team/Read/CardsTeamContainer/TeamContainer";
import CreateMember from "./Dashboard/Components/Team/Create/CreateMember";
import UpdateMember from "./Dashboard/Components/Team/Update/UpdateMember";
import Roles from "./Dashboard/Components/Team/Roles/Roles";
import ProjectsContainer from "./Dashboard/Components/Projects/Read/ProjectsContainer/ProjectsContainer";
import Create from "./Dashboard/Components/Projects/Create/Create";

import FaqsDashboard from "./Dashboard/Components/Faqs/AdminFaqs";
import NovedadesDashboard from "./Dashboard/Components/Novedades/Read/NovedadesDashboard";
import CreateContactInfo from "./Dashboard/Components/Nosotros/Create/CreateContactInfo";

function App() {
  const location = useLocation();

  return (
    <div>
      <AuthProvider>
        {location.pathname.startsWith("/admin") ? (
          <>
            <NavBarDashboard />
            <Head />
          </>
        ) : location.pathname === "/login" ||
          location.pathname === "/register" ? null : (
          <NavBarHome />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotrxs" element={<Nosotros />} />
          <Route path="/historias" element={<Stories />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/logros" element={<Achievements />} />
          <Route path="/equipo" element={<Equipoweb />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/contacto" />
          <Route path="/educacion" />
          <Route path="/genydiv" />
          <Route path="/accioncli" />
          <Route path="/emprendedores" />
          <Route path="/iteams" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/colaborar" element={<Donaciones />} />
          <Route
            path="/colaborar/formespecies"
            element={<DonacionEnEspecies />}
          />
          <Route path="/colaborar/donacionunica" element={<DonacionUnica />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <HomeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/equipo"
            element={
              <ProtectedRoute>
                <TeamContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/equipo/crear"
            element={
              <ProtectedRoute>
                <CreateMember />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/equipo/:id"
            element={
              <ProtectedRoute>
                <UpdateMember />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/equipo/roles"
            element={
              <ProtectedRoute>
                <Roles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/proyectos"
            element={
              <ProtectedRoute>
                <ProjectsContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/proyectos/create"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/donaciones" />

          <Route
            path="/admin/novedades"
            element={
              <ProtectedRoute>
                <NovedadesDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/novedades/create"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/faqs"
            element={
              <ProtectedRoute>
                <FaqsDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/nosotros"
            element={
              <ProtectedRoute>
                <CreateContactInfo />
              </ProtectedRoute>
            }
          />
        </Routes>

        {location.pathname.startsWith("/admin") ||
        location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <div className="bottom-page-contents">
            <>
              <Contacto />
              <Footer />
            </>
          </div>
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
