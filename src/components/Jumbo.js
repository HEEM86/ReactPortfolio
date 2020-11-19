import {Jumbotron, Container } from 'react-bootstrap';

function Jumbo() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            Ambitious Fullstack Web Developer, ready to provide company's and business a reliable development solution.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;

