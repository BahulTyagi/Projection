import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ReactDOM from "react-dom/client";
import SignUp from './Components/SignUp'
import StudentMenu from './Components/StudentMenu';
import CreateTeam from './Components/CreateTeam';
import ViewTeam from './Components/ViewTeam';
import View from './Components/View'

import Create from './Components/Create'

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
      <Route path="/StudentMenu" element={<StudentMenu />}/>
      <Route path="/CreateTeam" element={<CreateTeam />}/>
      <Route path="/ViewTeam" element={<ViewTeam />} />
      <Route path="/Create" element={<Create />}/>
      <Route path="/View" element={<View />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
