import './App.css';
import Header from './components/Header/Header';
import LendingPage from './pages/LendingPage/LendingPage';
import OneProductPage from './pages/OneProductPage/OneProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUpPage from './pages/SignUpPage/SignUpPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
function App() {
  return (
    <>

        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<LendingPage />}></Route>
            <Route path='/:id' element={<OneProductPage />}></Route>
            <Route path='/signUp' element={<SingUpPage />}></Route>
            <Route path='/errorpage' element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
