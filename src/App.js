import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import { useSelector } from "react-redux";
import Single from "./Pages/Single/Single"
import { useEffect } from 'react';
import useAxios from './hooks/useAxios';
import Add from './Pages/Add/Add';
function App() {
  const { response } = useAxios();

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(response));
  }, [response]);

  const user = useSelector(state => state.user.user);
  return (
    <div className="App">
      <BrowserRouter>
        {
          !user ?
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
            :
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/add" element={<Add />} />
            </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
