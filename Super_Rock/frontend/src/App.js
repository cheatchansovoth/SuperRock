import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import Register from './Pages/Regsiter';
import Admin from './Pages/Admin';
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
        <Navbar bg="success" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">OrderOnlineFood</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">{storeData? <a onClick={Logout}>Logout</a>: <a>Login</a>}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/admin/post' element={<Admin/>}></Route>
        </Routes>
  </Router>
  
  );
}

export default App;
