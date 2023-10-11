import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/Login.page.jsx';
import { Layout } from '../layouts/Layout';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='/' element={<Layout/>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
