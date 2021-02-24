
import { Navbar,Nav,Form,Table,Carousel,Card,CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import './Home.css';
function App() {
  return (
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Exam Alteration Helper</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Description">Description</Nav.Link>
      <Nav.Link href="#ExamSchedules">Examschedule</Nav.Link>
      <Nav.Link href="#Reviews">Reviews</Nav.Link>
      <Nav.Link href="#Contact">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <Nav.Link href="/alogin" >Admin Login</Nav.Link>
     <Nav.Link href="/flogin">Faculty Login</Nav.Link>
    </Form>
  </Navbar>
  </>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="\Main image1.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="\MicrosoftTeams-image.png"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>

<div className="desc" id="Description">
  <p>This website is intended for exam schedule alteration. 
The home page contains navigation to admin login, faculty login, 
shows the feedback of previous users , displays the description and 
achievements of the website. Next comes the admin/faculty login pages which 
enables us to login into their respective account with the help of 
 username and password. And if in case the user forgets password or 
too many failed attempts are taken place ,then necessary actions are taken.
 When it comes for alteration of allocation, the faculties can ask for
 modification or cancellation of their allotments as well as they can view 
their notifications , allotments of a particular date and their respective 
profile. While the admin can accept /reject the requests from faculties and 
sends the status of the allotments through mail. This website is pretty
 responsive and user friendly. Hope you enjoy browsing.
  </p>
  </div>
<div classname="exam" id="ExamSchedules">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Date</th>
      <th>CSE</th>
      <th>ECE</th>
      <th>MECH</th>
      <th>EIE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>27-12-2022</td>
      <td>Software Engineering</td>
      <td>Networks</td>
      <td>Fluids</td>
      <td>Industrial Instrumentation</td>
    </tr>
    <tr>
      <td>28-12-2022</td>
      <td>Compiler Design</td>
      <td>Digital communication</td>
      <td>Dynamics of machinary</td>
      <td>Optimization techniques</td>
    </tr>
  </tbody>
</Table>
</div>
<h1>Reviews</h1>
<div classname="rev" id="Reviews">
<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Review 1</Card.Title>
      <Card.Text>
      It's an awesome app,very easy to use ,Knowing time table in advance has helped us a lot
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Review 2</Card.Title>
      <Card.Text>
      Good app, compactly designed to provide needy things for use.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Review 3</Card.Title>
      <Card.Text>
      If you are a teacher just use it it's very easy to use and very responsive.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
<div id="Contact">
<h5 className="title">Contact us</h5>
            <p>
              <br></br>
            call us at: 9234-1234-45/78/90<br></br>
        or email us at: examalter@cb.amrita.edu<br></br>
	we value your feedback! write to us at: feedback@amrita.edu
            </p>
  </div>
  </div>
  );
}

export default App;
