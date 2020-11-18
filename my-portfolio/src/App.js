import React from 'react';
// import App from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import Jumbo from './components/Jumbo/Jumbo';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/Navbar';
// import "./components/NavStyles.css";

  function App () {
    return (
      <div>
        <NavBar/>
        <Jumbo/>
        <Footer/>
      </div>
    )
  }

export default App; 

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="secondary" variant="dark">
//     <Navbar.Brand href="#home">Ernest Wesson</Navbar.Brand>
//     <Nav className="ml-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">My Work</Nav.Link>
//       <Nav.Link href="#pricing">About Me</Nav.Link>
//       <Nav.Link href="#pricing">Contact</Nav.Link>
//     </Nav>
//   </Navbar>
//     <h1>React bootstrap</h1>
//     </div>
//   );

// };

// export default App;




























// function App() {
//   return (
    
//     <div className="App">
//       <NavBar/>
//       <header className="App-header">
        
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
