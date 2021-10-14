import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './pages/Home';
import New_Job from './pages/New_Job';
import Auth from './pages/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact"
import Footer from "./footer/Footer"
import about_us from './pages/about_us';
import home2 from './components/Login/Empleo';

function App() {
  return (
    <div>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/signin" exact component={Auth}/>
       <Route path="/servicies" exact component={New_Job}/>
       <Route path="/contact-us" exact component={Contact}/>
       <Route path="/Empleo" exact component={home2}/> 
     </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
