import {Link} from "react-router-dom"
import { FcHome } from "react-icons/fc"
import { Nav, Col, Row, Card, Navbar, NavDropdown, Container } from 'react-bootstrap'
import SideBar from "../SideBar"
import manual from './archive/manual.pdf'
import Ita from './images/tecnologico.png'
import LogoGob from './images/logo-gob.png'
import LogoTNM from './images/logo-tecnm.png'
import LogoEdu from './images/logo-educacion.png'


export default function NavBar() {
    return (
        <>
            <Container style={{ width: '75%' }} fluid>
                <Row className="align-items-center justify-content-center">
                    <Col xs={3} md={3} >
                        <Card.Img variant="top" src={LogoGob} />
                    </Col>
                    <Col xs={3} md={3}>
                        <Card.Img variant="top" src={LogoEdu} />
                    </Col>
                    <Col xs={3} md={3}>
                        <Card.Img variant="top" src={LogoTNM} />
                    </Col>
                    <Col xs={3} md={3}>
                        <Card.Img variant="top" src={Ita} style={{ width: '50%' }} />
                    </Col>
                </Row>
            </Container>
            <Navbar className="p-2" style={{ backgroundColor: "#1c3c6c" }} variant="dark" expand="lg">
                <Link className="lead" style={{ textDecoration: "none" }} to="/"><FcHome />  </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Tutorias">
                            <NavDropdown.Item ><Link style={{ textDecoration: "none", color: "black" }} to="/tutorias">¿Que son las tutorias?</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href={manual} target="_blank">Manual de usuario</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="http://acapulco.tecnm.mx/" target="_blank">Mi Tec</Nav.Link>
                        <Nav.Link href="https://tecnm.mx/" target="_blank">TECNM</Nav.Link>
                        <Nav.Link href="https://sii.it-acapulco.edu.mx/" target="_blank">SII</Nav.Link>
                        <Nav.Link href="https://login.microsoftonline.com/?whr=tecnm.mx/" target="_blank">Ingresar a tu correo</Nav.Link>
                            <SideBar />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}