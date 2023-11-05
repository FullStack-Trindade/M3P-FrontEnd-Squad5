import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PatientRegistrationPage } from "../pages/PatientRegistrationPage/PatientRegistration.page";
import { LoginPage } from "../pages/LoginPage/Login.page.jsx";
import { Layout } from "../layouts/Layout";
import { UserRegistrationPage } from "../pages/UserRegistrationPage/UserRegistration.page";
import { ExaminationRegistrationPage } from "../pages/ExaminationRegistrationPage/ExaminationRegistration.page";
import { DietRegistrationPage } from "../pages/DietRegistrationPage/DietRegistration.page";
import { HomePage } from "../pages/HomePage/Home.page";
import { PhysicalExerciseRegistrationPage } from "../pages/PhysicalExerciseRegistrationPage/PhysicalExerciseRegistration.page";
import { HandbookPage } from "../pages/HandbookPage/Handbook.page";
import { AppointmentRegistrationPage } from "../pages/AppointmentRegistrationPage/AppointmentRegistration.page";
import { MedicineRegistrationPage } from "../pages/MedicineRegistrationPage/MedicineRegistration.page";

// import { useAuth } from "../hooks/useAuth.js";
import { ThemeConfigPage } from "../pages/ThemeConfigPage/ThemeConfig.page.jsx";
import { LogPage } from "../pages/LogPage/LogPage.jsx";

import { PrivateRoutes } from "./PrivateRoutes.jsx";

export const AppRoutes = () => {
  // const { isLogged } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Layout />
            </PrivateRoutes>
          }
        >
          <Route
            index
            element={
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/usuarios/"
            element={
              <PrivateRoutes>
                <UserRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/usuarios/:id"
            element={
              <PrivateRoutes>
                <UserRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/paciente"
            element={
              <PrivateRoutes>
                <PatientRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/paciente/:id"
            element={
              <PrivateRoutes>
                <PatientRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/exame"
            element={
              <PrivateRoutes>
                <ExaminationRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/exame/:id"
            element={
              <PrivateRoutes>
                <ExaminationRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/dieta"
            element={
              <PrivateRoutes>
                <DietRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/dieta/:id"
            element={
              <PrivateRoutes>
                <DietRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/exercicio"
            element={
              <PrivateRoutes>
                <PhysicalExerciseRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/exercicio/:id"
            element={
              <PrivateRoutes>
                <PhysicalExerciseRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/consulta"
            element={
              <PrivateRoutes>
                <AppointmentRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/consulta/:id"
            element={
              <PrivateRoutes>
                <AppointmentRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/prontuario"
            element={
              <PrivateRoutes>
                <HandbookPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/prontuario/:id"
            element={
              <PrivateRoutes>
                <HandbookPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/medicamento"
            element={
              <PrivateRoutes>
                <MedicineRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/cadastro/medicamento/:id"
            element={
              <PrivateRoutes>
                <MedicineRegistrationPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/admin/logs"
            element={
              <PrivateRoutes>
                <LogPage />
              </PrivateRoutes>
            }
          />
          <Route path="/configuracoes" element={<ThemeConfigPage />} />
          <Route path="/admin/logs" element={<LogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
