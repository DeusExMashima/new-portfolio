import { MENU } from '../../../data'
import { Nav, Navbar } from 'react-bootstrap';
export const Navigation = () => {

    return (
        <Navbar collapseOnSelect bg="primary" expand="lg" className="navigation">
            <Navbar.Brand href="#home">
                Mashima Button
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation-menu" />
            <Navbar.Collapse id="navigation-menu">
                <Nav className="mr-auto"></Nav>
                <Nav className="align-items-center text-white">
                        {
                            MENU.map((el: MenuItem) => (
                                <Nav.Link href={ el.link }>
                                    { el.name }
                                </Nav.Link>
                            ))
                        }
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
};
