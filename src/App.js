import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Login from "./components/users/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/add" element={<AddUser/>} />
        <Route exact path="/users/edit/:id" element={<EditUser/>}/>

        <Route exact path="/users/:id" element={<User />} />

        <Route path="/login" element={<Login/>}/>
        
        <Route element={NotFound} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
