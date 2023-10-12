import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPatientPage } from "../pages/RegisterPatientPage/RegisterPatient.Page";

export const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPatientPage />} />
        </Routes>
      </Router>
    </div>
  );
};
