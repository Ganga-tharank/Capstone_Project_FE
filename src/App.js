import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Task from "./Pages/Task1";
import Home from "./Pages/Home";
import Login from "./Pages/Login1";
import Signup from "./Pages/Signup";
import { saveProfile } from "./redux/actions/authActions";
import NotFound from "./Pages/NotFound";

function App() {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    dispatch(saveProfile(token));
  }, [authState.isLoggedIn, dispatch]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={authState.isLoggedIn ? <NavLink to="/" /> : <Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks/add" element={authState.isLoggedIn ? <Task /> : <NavLink to="/login" state={{ switchUrl: "/tasks/add" }} />} />
          <Route path="/tasks/:taskId" element={authState.isLoggedIn ? <Task /> : <NavLink to="/login" state={{ switchUrl: window.location.pathname }} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;