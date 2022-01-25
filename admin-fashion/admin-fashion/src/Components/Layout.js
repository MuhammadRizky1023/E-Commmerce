import { useState } from "react"
import { Col, Container, Nav, Navbar, Row, NavDropdown, NavbarBrand } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {

  
  return (
    <div>
      <Navbar bg="secondary" variant="dark" expand="lg" >
        <Container >
          <Navbar.Brand>
            <Link 
              to={{pathname: '/'}} 
              className="text-decoration-none text-reset"
            >
             Fashion Admin
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
            <Nav>
              <Nav.Link>
                <Link 
                  to={{pathname: '/'}} 
                  className="text-decoration-none text-reset"
                >
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  to={{pathname: '/register'}} 
                  className="text-decoration-none text-reset"
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="my-5">
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}