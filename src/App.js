import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {
          user ?
          <Routes path="/" element={<Login/>}/>
          :
          <Routes path="/" element={<Home/>}/> 
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
