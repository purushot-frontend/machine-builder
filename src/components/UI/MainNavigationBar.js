import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { machineTypeList as typeList } from "./../../store/databaseSlice";

function MainNavigationBar() {
  const machineTypeList = useSelector(typeList);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Machine Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">All Machines</Link>
            </Nav.Link>

            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Machine Types" id="collasible-nav-dropdown">
              {Object.values(machineTypeList).map((element, index) => (
                <NavDropdown.Item>
                  <Link key={index} to={`/${element.name.replace(/\s/g, "-")}`}>
                    {element.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/machine-type">Manage Machine Types</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigationBar;
