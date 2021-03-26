import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../Home/Home';
import Book from '../Book/book';
import BooksList from '../Books/books';
import './header.scss';


const Header = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
            <Nav fill variant="tabs" defaultActiveKey="/" >
                <Nav.Item>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/books">Books</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
            <Route path="/books" component={BooksList} />
            <Route path="/home" component={Home} />
            <Route path="/book/:id" component={Book} />
        </Router>

    )
}

export default Header;
