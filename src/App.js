import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';
import Contact from './components/Contact'
import { Container, Card, Button, CardDeck, Image } from 'react-bootstrap';



  function Appsite() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Ernest Wesson</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron fluid>
          <Container>
            <h1>Ernest Wesson</h1>
            <p>
              Ambitious Fullstack Web Developer, ready to provide company's and
              businesses a reliable development solution.
            </p>
            <a href="https://www.linkedin.com/in/ernest-wesson-b4183b5a/">LinkedIN</a>
            <br></br>
            <a href="https://drive.google.com/file/d/1AlmN8_dNbGBTDhQxKF3PKkIcLPGQ-7Ww/view?usp=sharing">Resume</a>
          </Container>
        </Jumbotron>
        
        

        {/* <img  src="/Images/MERNimage.jpg" alt=""/> */}



      

        <Container>

        <Card className="bg-dark text-white">
  <Card.Img src="/Images/MERNimage.jpg/100px270" alt="MERN Stack Image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
          <br></br>
        <CardDeck>
          
  <Card>
    <Card.Img className="card-Image-fluid" src="https://i.ibb.co/cD8BDrQ/covid-pronto-1.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> 
  
  </CardDeck>

  <CardDeck>
          
          <Card>
            <Card.Img className="card-Image-fluid" src="https://i.ibb.co/dW8z6mV/petspace.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> 
          
          </CardDeck>

          <CardDeck>
          
          <Card>
            <Card.Img className="card-Image-fluid" src="https://i.ibb.co/wwghLnX/pass-gen-project.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> 
          
          </CardDeck>

          <CardDeck>
          
          <Card>
            <Card.Img className="card-Image-fluid" src="https://i.ibb.co/cD8BDrQ/covid-pronto-1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> 
          
          </CardDeck>

          <CardDeck>
          <hr className="my-4"/>

          <Card>
            <Card.Img className="card-Image-fluid" src="https://i.ibb.co/JscGYQv/Planner-project.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> 
          
          </CardDeck>
         
          <CardDeck>
          
          <Card>
            <Card.Img className="card-Image-fluid" src="https://i.ibb.co/Cpd0Zvb/weather-project.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> 
          
          </CardDeck>
        

      
  </Container>

       
    
          <Footer>
          <h2>
          Ernest Wesson Copy Right 2020 
          </h2>
          </Footer>
        </div>
    

    
    
    );
  }

  export default Appsite; 
 

    






























