
import './Faculty_login.css';
import { Navbar,Nav,Form,Table,Carousel,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function App() {
  return (
   <div className="Login">
        <Link to="/"><Button variant="primary" className="but">
    Home
  </Button>
  </Link>
       <div className="Guns">
       <Card border="dark" style={{ width: '30rem' }}>
           <Card.Body>
       <Card.Title>Faculty LOGIN</Card.Title>
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
<Card.Link href="#" className="llink">Forgot password</Card.Link>
</Form>
</Card.Body>
</Card>
  </div>
  </div>
  );
}

export default App;
