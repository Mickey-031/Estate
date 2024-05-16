import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from "./Components/Header";
// import privateRoute from "./Components/PrivateRoute";
import PrivateRoutes from "./Components/PrivateRoutes";



const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/SignIn" element={<Signin/>}/>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/About" element={<About/>}/>
     <Route element={<PrivateRoutes/>}>
     <Route path="/Profile" element={<Profile/>}/>
     </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App