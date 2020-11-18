import {Jumbotron, Button } from 'react-bootstrap';

function Jumbo () {
    return (
        <div className="App">
            <Jumbotron>

            <h1>
            <span >Ernest Wesson</span> <span class='otherStyle' >Portfolio</span>
            </h1>

                {/* <h1>Ernest Wesson's Portfolio</h1>  */}
                            
                <p>
                    This is a simple hero unit, a simple jumbotron-styl component for callin 
                    extra attentin to feature content or information. 
                </p>
                <p>
                    {/* <Button variant="primary">Learn More</Button> */}
                </p>
            </Jumbotron>
        </div>
    )
}

export default Jumbo;

