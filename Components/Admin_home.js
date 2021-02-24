import React from "react";
import './Admin_home.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button} from "react-bootstrap";
import Calendar from 'react-calendar';

const ahome=()=>{
    return(
        <div className="ahome">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Exam alteration helper</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/Allocation">Exam slot allocation</Nav.Link>
    <Nav.Link href="/Detailsediting">Allotment alteration</Nav.Link>
    <Nav.Link href="/allotdetails">Allotment details</Nav.Link>
    <Nav.Link href="/newreg">New faculty registeration</Nav.Link>
    <Nav.Link href="/anotify">Notifications</Nav.Link>
  </Nav>
  <Nav>
 <Link to='/'><Button variant="dark" >Log out</Button></Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  <div className="image">
        <p ><b> “The life so short, the craft so long to learn.”
                                        ― Hippocrates</b>
       
        </p>
        </div>

        <div className="calender">
        <Calendar activeMonth={new Date()} />
        <br></br>
        <br></br>
      
      </div>
</div>
    )
}
export default ahome;