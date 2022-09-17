import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import Home from './components/home';
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <nav>
    <Link to='/'>Home</Link>
    <Link to='/profile'>Profile</Link>
   </nav>
   <Routes>
    <Route path='/' exact element={<Home />} /> 
    <Route path='/profile' element={<Profile />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
