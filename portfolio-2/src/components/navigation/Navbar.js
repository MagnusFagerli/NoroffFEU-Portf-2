import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Projects from "../portfolio/Projects";
import Contact from "../contact/Contact";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="Navigation">
      <Router>
        <Navbar className="nav" variant="light" expand="lg" expanded={expanded}>
          <NavLink className="navlink" to="/">
            <Navbar.Brand className="navtext">Fagerli</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default Navigation;
