
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './pages/home/index.jsx';
import Login from './pages/login/index.jsx';
import Signup from './pages/signup/index.jsx';
import Profile from './pages/profile/Index.jsx';



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
