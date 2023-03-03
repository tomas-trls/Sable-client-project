import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import Resources from "./pages/Resources/Resources.jsx";
import Settings from "./pages/Settings/Settings";
import Staff from "./pages/Staff/Staff.jsx";
import EditResource from "./pages/EditResource/EditResource";
import RequestResource from "./pages/RequestResource/RequestResource";
import AddClient from "./pages/AddClient/AddClient";
import EditClient from "./pages/EditClient/EditClient";
import BookingActive from "./pages/BookingActive/BookingActive";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";
import Error from "./pages/Error/Error";
import BackToLogin from "./pages/BackToLogin/BackToLogin";
import ClientDetail from "./pages/ClientDetail/ClientDetail";
import mockData from "./data/mockData";

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
          <Route path="/resources/edit/:id" element={<EditResource resources={mockData.resources}/>} />
          <Route path="/resources/request" element={<RequestResource />} />
          <Route path="/settings" element={<Settings setUser={logOut} />} />
          <Route path="/client/add-client" element={<AddClient />} />
          <Route path="/client/edit-client" element={<EditClient />} />
          <Route path="/client/detail" element={<ClientDetail />}/>
          <Route path="/staff/booking" element={<BookingActive/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<Error page={"home"} />} />
          <Route path="/booking" element={<Error page={"booking"} />} />
          <Route path="/staff" element={<Error page={"staff"} />} />
          <Route path="/client" element={<Error page={"client"} />} />
          <Route path="/resources" element={<Error page={"resources"} />} />
          <Route
            path="/resources/edit:id"
            element={<Error page={"resources"} />}
          />
          <Route
            path="/resources/request"
            element={<Error page={"resources"} />}
          />
          <Route path="/settings" element={<Error page={"settings"} />} />
          <Route
            path="/client/add-client"
            element={<Error page={"client"} />}
          />
          <Route
            path="/client/edit-client"
            element={<Error page={"client"} />}
          />
          <Route path="/client/detail" element={<Error page={"client"} />}/>
          <Route path="/staff/booking" element={<Error page={"staff"} />} />
        </Routes>
      )}
    </>
  );
};

export default App;