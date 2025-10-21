import { NavLink } from "react-router-dom"; 
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (


        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">Svelte Starter&nbsp;</Navbar.Brand>

            <Nav.Link as={NavLink} to="/" end>Home&nbsp;</Nav.Link>
            <Nav.Link as={NavLink} to="/Presentation">Presentation&nbsp;</Nav.Link>
            <Nav.Link as={NavLink} to="/Tutorial">Tutorial</Nav.Link>
   
      </Container>
    </Navbar>
  );
}

export default Header;