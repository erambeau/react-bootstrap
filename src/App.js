import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="px-4 my-5">
          <Row>
            <Col sm={7}>
              <Image src="https://dummyimage.com/900x400/000/fff" fluid 
              rounded className=""/>
            </Col>
            <Col sm={5}>
              <h1 className="font-weight-light">Tagline</h1>
              <p className="mt-4">Finding the perfect tagline is quite a task. You want something that encapsulates who you are, what you’re about, and why people should choose you. You want it to be punchy, impactful, descriptive, memorable, and likeable—and that’s a tall order. Many people look to memorable tagline examples like Nike’s “Just Do It” or Apple’s “Think Different” for inspiration. But what if you aren’t selling elite athletic sportswear or innovative technology? Can you come up with a strong line that captures these elements—even if you’re a mom-and-pop bakery? Absolutely.</p>
              <Button variant="outline-primary">Call to action</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;