import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route, Redirect} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Services";
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';

const App =() =>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/service" component={Service}/>
            <Redirect to="/ " />
        </Switch>
        <Footer/>
        </>
    );
};

export default App;