import './App.css';
import Header from './components/Header/Header';
import LendingPage from './pages/LendingPage/LendingPage';
import OneProductPage from './pages/OneProductPage/OneProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUpPage from './pages/SignUpPage/SignUpPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LogInPage from './pages/LogInPage/LogInPage';
import FeaturedItemsPage from './pages/FeaturedItemsPage/FeaturedItemsPage';
import CatalogePage from './pages/CatalogePage/CatalogePage';
function App() {
  return (
    <>

        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<LendingPage />}></Route>
            <Route path='/:id' element={<OneProductPage />}></Route>
            <Route path='/signUp' element={<SingUpPage />}></Route>
            <Route path='/logIn' element={<LogInPage />}></Route>
            <Route path='/errorpage' element={<ErrorPage />}></Route>
            <Route path='/cataloge' element={<CatalogePage />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
