import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 Navigate,
 
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";





import HomePage from "../components/homePage";
import ViewProducts from "../components/ViewProducts";
import Reviews from "../components/reviews";
import ViewCart from "../components/viewcart";

import logo from "../images/jordan 1 brotherhood.jpg";
class Navibar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <br />
              <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                sticky="top"
                id="myNav"
              >
                <Container>
                  <Navbar.Brand>
                    <span>
                      {" "}
                      <img id="siteLogo" alt="" src={logo} />{""}
                      <span id="siteLogoTitle">Kicks</span>
                    </span>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/homePage">Home</Nav.Link>
                      <Nav.Link href="/about-us">Contact Us</Nav.Link>
                      <NavDropdown title="Site Content" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/view-products">
                          View Products
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/reviews">
                          Reviews
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/hang-out-with-us">
                          Hang Out With Us
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/cart">View Cart</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
            <Routes>
                <Route exact path="/homePage" element={<HomePage />}></Route>
                <Route
                  exact
                  path="/view-products"
                  element={<ViewProducts />}
                ></Route>
                <Route exact path="/reviews" element={<Reviews />}></Route>
                <Route exact path="/cart" element={<ViewCart />}></Route>
               <Route
               exact
               path="/"
               element={<Navigate to="homepage"/>}
              ></Route>
              <Route
              exact
              path="/"
              element={<Navigate to="jauwons-final-project"/>}
              ></Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Navibar;