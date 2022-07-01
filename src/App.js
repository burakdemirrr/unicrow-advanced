import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import {useSelector} from "react-redux";
function App() {
  const user=useSelector(state=>state.user.user);
  return (
    <div className="App">
      <BrowserRouter>
        {
          !user ? 
          <Routes>
          <Route path="/" element={<Login/>}/>
           </Routes>
          : 
          <Routes>
            <Route path="/home" element={<Home/>}/> 
          </Routes>
          
        }
          
      </BrowserRouter>
    </div>
  );
}

export default App;
