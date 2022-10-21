import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import AnimatedRoutes from './AnimatedRoutes';

function App() {
  
  return (
    <div className='App'>
      <Navbars/>
    </div>
  );
}
const Navbars=()=>{
  return (
    <Router>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">OrderOnlineFood</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center">
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <AnimatedRoutes />
  </Router>
  );
}

export default App;
