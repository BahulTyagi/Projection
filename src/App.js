import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ReactDOM from "react-dom/client";
import SignUp from './Components/SignUp'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
    
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
