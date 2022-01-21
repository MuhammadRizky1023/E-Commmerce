import React, { useState } from "react"
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import useRouter from'use-react-router'
export const Layout = ({ children }) => {
  const {history} = useRouter()
  
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') && localStorage.getItem('isLogin'))

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isLogin')

    history.push('/login')
  }
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link 
              to={{pathname: '/'}} 
              className="text-decoration-none text-reset"
            >
              Fashion App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isLogin ? (
                <Nav.Link>
                  <div
                    // to={{pathname: '/Login'}} 
                    className="text-decoration-none text-reset"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </Nav.Link>
              ) : (
                <React.Fragment>
                  <Nav.Link>
                    <Link
                      to={{ pathname: '/Login' }}
                      className="text-decoration-none text-reset"
                    >
                      Login
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to={{ pathname: '/register' }}
                      className="text-decoration-none text-reset"
                    >
                      Register
                    </Link>
                  </Nav.Link>
                </React.Fragment>
              )}
            </Nav>
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