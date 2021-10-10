import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar class="navbar navbar-dark" style="background-color: #46B1C9;">
        <Navbar.Brand className="ps-2 ms-3">Abby Castelow</Navbar.Brand>
        <Nav>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Projects')}
            className={
              currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href=""
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NavTabs;
