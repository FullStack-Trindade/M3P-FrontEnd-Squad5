import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PatientRegistrationPage } from "../pages/PatientRegistrationPage/PatientRegistration.page";

export const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PatientRegistrationPage />} />
        </Routes>
      </Router>
    </div>
  );
};
