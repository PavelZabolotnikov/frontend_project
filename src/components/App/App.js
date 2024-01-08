import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import './App.css';
import { CardPage } from '../../pages/CardPage/CardPage';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<CardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
