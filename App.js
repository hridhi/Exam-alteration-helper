
import './App.css';
import React, { Component } from 'react';
import { Navbar,Nav,Form,Table,Carousel,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./Componets/Home";
import flogin from "./Componets/Faculty_login";
import alogin from "./Componets/Admin_login";
import ahome from "./Componets/Admin_home";
import { BrowserRouter, Route,Switch } from 'react-router-dom'; 
class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/flogin" component={flogin} exact/>
             <Route path="/alogin" component={alogin} exact/>
             <Route path="/ahome" component={ahome} exact/>
             </Switch>
             </BrowserRouter>
    );
  }
}


export default App;
