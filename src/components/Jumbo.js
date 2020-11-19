import {Jumbotron, Button } from 'react-bootstrap';

function Jumbo () {
    return (
        <div className="App">
            <Jumbotron>
                            <h1>Ernest Wesson's Portfolio</h1> 
                            
                <p>
                   Ambitious FullStack Web Developer
                </p>
                <p>
                    {/* <Button variant="primary">Learn More</Button> */}
                </p>
            </Jumbotron>
        </div>
    )
}

export default Jumbo;

