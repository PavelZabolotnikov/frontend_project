import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import { AppRoute } from '../../constants';
import { Header } from '../Header/Header';
import { PilotsPage } from '../../pages/PilotsPage/PilotsPage';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';
import { AboutAppPage } from '../../pages/AboutAppPage/AboutAppPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={AppRoute.Registration} element={<RegistrationPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.PilotsPage} element={<PilotsPage />} />
          <Route path={AppRoute.AboutAppPage} element={<AboutAppPage />} />
          <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
