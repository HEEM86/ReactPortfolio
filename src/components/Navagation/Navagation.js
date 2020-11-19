import React from 'react'; 
// import { Link } from "react-router-dom";
import "./navstyles.css";
import { Navbar, Nav } from 'react-bootstrap';

function Nava () {
    return (
 <div className="Navstyles">
   <Navbar styles="justify-content-center" bg="secondary" variant="dark">
     {/* <Navbar.Brand href="#home">Ernest Wesson</Navbar.Brand> */}
     <Nav className="ml-auto">
       {/* <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">My Work</Nav.Link>
       <Nav.Link href="#pricing">About Me</Nav.Link> */}
       <Nav.Link href="#contact">Contact</Nav.Link>
     </Nav>
   </Navbar>
   {/* <h1>React bootstrap</h1> */}
 </div>
    )
}
export default Nava; 


// function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Pupster
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/about"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//               Discover
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/search"
//               className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//             >
//               Search
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;