import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Service from "../Services";
import Home from "../Home";
import NotFound from "../Notfound";
import Profile from "../Profile";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tabs";
import App from "../../App";


export default function WebRouter() {
  return (
    <Router>
      {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ul> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Service />} />
        <Route path='profile/:userName' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}