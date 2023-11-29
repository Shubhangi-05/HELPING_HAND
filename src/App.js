import './App.css';
import Layout from './components/Layout/Layout';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import UserRegister from './pages/Auth/UserRegister';
import NgoRegister from './pages/Auth/NgoRegister';
import Login from './pages/Auth/Login';
import NgoLogin from './pages/Auth/NgoLogin';
import UserLogin from './pages/Auth/UserLogin';
import CreatePost from './pages/Post/CreatePost';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/userregister' element={<UserRegister/>}></Route>
        <Route path='/ngoregister' element={<NgoRegister/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/ngologin' element={<NgoLogin/>}></Route>
        <Route path='/userlogin' element={<UserLogin/>}></Route>
        <Route path='/createpost' element={<CreatePost/>}></Route>
      </Routes>
    </>
  );
}

export default App;