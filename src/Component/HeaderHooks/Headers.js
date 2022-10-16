import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
 BrowserRouter,
 Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
import Regsation from './Regsation';
function Header() {
  return (
    <div>
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">about</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/regsiston">regsisto</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<div>

<Routes>
 <Route path='/' element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/regsiston" element={<Regsation/>}/>
 <Route path="/login" element={<Login/>}/>
</Routes>
</div>
    </BrowserRouter>
    
    </div>
  );
}

export default Header;