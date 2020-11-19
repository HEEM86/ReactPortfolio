import React from 'react';
// import App from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
// import Jumbo from './components/Jumbo';
import Footer from './components/Footer';
// import Navagation from './components/Navagation/Navagation';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/Contact'
import { Container, Card, Button, CardDeck } from 'react-bootstrap';



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
          </Container>
        </Jumbotron>
        
        <img  src="/Images/MERNimage.jpg" alt="" class="stack" />



      

        <Container> 
          
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
 

    






























