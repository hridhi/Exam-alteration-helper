
import './Admin_login.css';
import { Navbar,Nav,Form,Table,Carousel,Button,Card,Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect } from 'react-router-dom';
import { useState,useEffect} from 'react';
import {db,auth,signInWithGoogle} from '../firebase';
function App() {
  const [email,setEmail]=useState('');//database
  const [password,setPassword]=useState('');//database
  const [redirect, setredirect] = useState(null);
  function submit_login(e){
    e.preventDefault();
    let request =  {
        username:document.getElementById('uname').value,
        pass:document.getElementById('pwd').value,
    }
    if(email==request.username && password==request.pass){
      window.location.replace('/ahome');
    }
    
    else{
      console.log("failure");
      alert('Wrong credentials!!​');
    }
  
  }
  useEffect(() =>{
    db.collection('AdminDetails').onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc => doc.data().Email))
      setPassword(snapshot.docs.map(doc => doc.data().Password))
    })
  },[]);

  

  return (
   <div className="Admin">
     <h1> forget password </h1>
       <Link to="/"><Button variant="primary" className="but">Home</Button></Link>
       <div className="Guns">
       <Card border="dark" style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Admin LOGIN</Card.Title>
          <Form onSubmit={(e)=>submit_login(e)}>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email" id="uname"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" id="pwd"/>
            </Form.Group>
            <Button className="login-provider-button" onClick={signInWithGoogle}>
                  <span> Continue with Google</span>
               </Button>
            <Button variant="primary" type="submit" value="Submit">Submit</Button>
            <Card.Link href="/forget" className="llink">Forgot password</Card.Link>
            </Form>
        </Card.Body>
      </Card>
      </div>
  </div>
  );
}

export default App;
