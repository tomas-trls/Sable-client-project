import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import Settings from "./pages/Settings/Settings";
import Staff from "./pages/Staff/Staff.jsx";
import EditResource from "./pages/EditResource/EditResource";
import RequestResource from "./pages/RequestResource/RequestResource";
import AddClient from "./pages/AddClient/AddClient";
import EditClient from "./pages/EditClient/EditClient";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";
import Error from "./pages/Error/Error";
import BackToLogin from "./pages/BackToLogin/BackToLogin";

const App = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const logOut = (event) => {
    event.preventDefault();
    navigate("/backtologin");
    setUser(null);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/backtologin" element={<BackToLogin />} />
      </Routes>
      {user ? (
        <Routes>
          <Route path="/home" element={<Home setUser={logOut} />} />
          <Route path="/booking" element={<NewAppointment />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/client" element={<Client />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/edit" element={<EditResource />} />
          <Route path="/resources/request" element={<RequestResource />} />
          <Route path="/settings" element={<Settings setUser={logOut}/>} />
          <Route path="/client/add-client" element={<AddClient/>} />
          <Route path="/client/edit-client" element={<EditClient/>} />
      </Routes>
      ) : <Routes>
      <Route path="/home" element={<Error page={"home"}/>} />
      <Route path="/booking" element={<Error page={"booking"}/>} />
      <Route path="/staff" element={<Error page={"staff"}/>} />
      <Route path="/client" element={<Error page={"client"}/>} />
      <Route path="/resources" element={<Error page={"resources"}/>} />
      <Route path="/resources/edit" element={<Error page={"resources"}/>} />
      <Route path="/resources/request" element={<Error page={"resources"}/>} />
      <Route path="/settings" element={<Error page={"settings"}/>} />
      <Route path="/client/add-client" element={<Error page={"client"}/>} />
      <Route path="/client/edit-client" element={<Error page={"client"}/>} />
    </Routes>}
    </>
  );
};

export default App;