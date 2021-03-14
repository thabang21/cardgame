import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="App-header">
      <Navbar md="light" variant="light">
        <Navbar.Brand href="/">
        </Navbar.Brand>
        <h1 className="logoName"> Cards Games and Currency Converter</h1>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="#Home">Home</Nav.Link>
              </Link>
              <Link to="/TheGame">
                <Nav.Link href="#TheGame">Win</Nav.Link>
              </Link>
              <Link to="/Curr">
                  <Nav.Link href="#Curr">Currency Converter</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic">
            Choose option
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/TheGame">
              <Dropdown.Item href="#TheGame">Win</Dropdown.Item>
            </Link>
            <Link to="/Curr">
              <Dropdown.Item href="#Curr">Currency Converter</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
