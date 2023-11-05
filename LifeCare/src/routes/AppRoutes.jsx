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
import { ThemeConfigPage } from "../pages/ThemeConfigPage/ThemeConfig.page.jsx";
import { LogPage } from "../pages/LogPage/LogPage.jsx";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/cadastro/usuarios/"
            element={<UserRegistrationPage />}
          />
          <Route
            path="/cadastro/usuarios/:id"
            element={<UserRegistrationPage />}
          />
          <Route
            path="/cadastro/paciente"
            element={<PatientRegistrationPage />}
          />
          <Route
            path="/cadastro/paciente/:id"
            element={<PatientRegistrationPage />}
          />
          <Route
            path="/cadastro/exame"
            element={<ExaminationRegistrationPage />}
          />
          <Route
            path="/cadastro/exame/:id"
            element={<ExaminationRegistrationPage />}
          />
          <Route path="/cadastro/dieta" element={<DietRegistrationPage />} />
          <Route
            path="/cadastro/dieta/:id"
            element={<DietRegistrationPage />}
          />
          <Route
            path="/cadastro/exercicio"
            element={<PhysicalExerciseRegistrationPage />}
          />
          <Route
            path="/cadastro/exercicio/:id"
            element={<PhysicalExerciseRegistrationPage />}
          />
          <Route
            path="/cadastro/consulta"
            element={<AppointmentRegistrationPage />}
          />
          <Route
            path="/cadastro/consulta/:id"
            element={<AppointmentRegistrationPage />}
          />
          <Route path="/prontuario" element={<HandbookPage />} />
          <Route path="/prontuario/:id" element={<HandbookPage />} />
          <Route
            path="/cadastro/medicamento"
            element={<MedicineRegistrationPage />}
          />
          <Route
            path="/cadastro/medicamento/:id"
            element={<MedicineRegistrationPage />}
          />
          <Route path="/admin/configuracao" element={<ThemeConfigPage />} />
          <Route path="/admin/logs" element={<LogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
