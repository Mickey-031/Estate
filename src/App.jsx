import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/SignIn" element={<Signin/>}/>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App