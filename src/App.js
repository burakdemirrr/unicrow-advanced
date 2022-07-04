import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import { useSelector } from "react-redux";
import Single from "./Pages/Single/Single"
import { useEffect } from 'react';
import useAxios from './hooks/useAxios';
import Add from './Pages/Add/Add';
import Navbar from './components/Navbar/Navbar';
import { CircularProgress } from '@mui/material';
function App() {
  const { response,loading } = useAxios();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(response));
  }, [response]);

  if(loading){
    return(
        <div className="progres">
            <CircularProgress />
        </div>
    )
}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {
          !user ?
              <Route path="/" element={<Login />} />
            :<>
              <Route path="/home" element={<><Navbar user={user}/><Home /></>} />
              <Route path="/single/:id" element={<><Navbar user={user}/><Single /></>} />
              <Route path="/add" element={<><Navbar user={user}/><Add /> </>} />
            </>
        }</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
