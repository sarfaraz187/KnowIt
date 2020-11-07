import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import '../../index.css';
import Navbar from 'react-bootstrap/Navbar'

const NavComponents = () => {
  const [hire, setHire] = useState(false);
  const [pages, setPages] = useState(false);
  const [posts, setPosts] = useState(false);
  const [categories, setCategories] = useState(false);

  return (
    <header className="">
      <Navbar className="px-0" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown className="hireStyle mr-3" title="Home" show={hire} onMouseEnter={() => setHire(true)} onMouseLeave={() => setHire(false)} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className=" mr-3" title="Pages" show={pages} onMouseEnter={() => setPages(true)} onMouseLeave={() => setPages(false)} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className=" mr-3" title="Posts" show={posts} onMouseEnter={() => setPosts(true)} onMouseLeave={() => setPosts(false)} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className=" mr-3" title="Categories" show={categories} onMouseEnter={() => setCategories(true)} onMouseLeave={() => setCategories(false)} id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="categories mr-3" href="#home">Sports</Nav.Link>
            <Nav.Link className="categories mr-3" href="#home">World</Nav.Link>
            <Nav.Link className="categories mr-3" href="#home">Contact</Nav.Link>
          </Nav>
          <div className="search px-2">Search</div>
          <div className="px-2">Weather Api</div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavComponents