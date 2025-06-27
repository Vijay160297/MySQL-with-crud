// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// const NavigationBar = () => {
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg">
//             <Navbar.Brand href="/">CRUD App</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <LinkContainer to="/">
//                         <Nav.Link>Home</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to="/create">
//                         <Nav.Link>Create Post</Nav.Link>
//                     </LinkContainer>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavigationBar;


//-----2-----------

// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// const NavigationBar = () => {
//     return (
//         <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm py-3">
//             <Container>
//                 <LinkContainer to="/">
//                     <Navbar.Brand className="mx-auto fs-4">📝 My CRUD App</Navbar.Brand>
//                 </LinkContainer>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
//                     <Nav className="me-auto">
//                         <LinkContainer to="/">
//                             <Nav.Link className="px-4 rounded-pill bg-light text-primary mx-2">Home</Nav.Link>
//                         </LinkContainer>
//                         <LinkContainer to="/create">
//                             <Nav.Link className="px-4 rounded-pill bg-light text-primary mx-2">Create</Nav.Link>
//                         </LinkContainer>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default NavigationBar;

//------3--------

import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-dark bg-opacity-75 navbar-dark py-3 shadow">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="fw-bold">🛠️ CRUD Panel</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link-custom">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/create">
                            <Nav.Link className="nav-link-custom">Create</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
