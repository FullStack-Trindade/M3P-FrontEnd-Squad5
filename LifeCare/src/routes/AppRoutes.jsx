import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PatientRegistrationPage } from "../pages/PatientRegistrationPage/PatientRegistration.page";
import { LoginPage } from "../pages/LoginPage/Login.page.jsx";
import { Layout } from "../layouts/Layout";
import { UserRegistrationPage } from "../pages/UserRegistrationPage/UserRegistration.page";
import { ExaminationRegistrationPage } from "../pages/ExaminationRegistrationPage/ExaminationRegistration.page";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/cadastro/paciente"
            element={<PatientRegistrationPage />}
          />
          <Route
            path="/cadastro/paciente/:id"
            element={<PatientRegistrationPage />}
          />
          <Route path="/cadastro/usuario" element={<UserRegistrationPage/>}/>
          <Route path="/cadastro/exame" element={<ExaminationRegistrationPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};
