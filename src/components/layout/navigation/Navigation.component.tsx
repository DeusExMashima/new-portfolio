import { MENU } from '../../../data'
import { Nav, Navbar } from 'react-bootstrap';
import { Image } from '../../image/Image.component';
export const Navigation = () => {

    return (
        <Navbar collapseOnSelect bg="primary" expand="lg" className="navigation">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <div className="logo-div">
                <Image imgCode="mblogo" altText="MB Logo" /></div>
                <h1 className="text-white p-3">
                Mashima Button</h1>
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
