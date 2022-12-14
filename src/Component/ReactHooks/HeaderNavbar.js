import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HeaderNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/Contacts"}>Contacts</Nav.Link>
            <Nav.Link as={Link} to={"/Products"}>Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
 
    </>
  );
}

export default HeaderNavbar;

 