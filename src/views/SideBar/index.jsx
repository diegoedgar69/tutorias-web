import {Link, useHistory} from "react-router-dom";
import {BiLogOut} from "react-icons/bi";
import perfil from "../../images/default.png"
import LoginsContext from "../../contex/logins";
import {useState, useContext, useEffect} from "react"
import {Nav, Offcanvas, ListGroup, Card} from 'react-bootstrap';
import {FcBusinessman, FcCalendar, FcFile, FcSurvey} from "react-icons/fc";

export default function SideBar() {
    const history = useHistory();
    const {logout} = useContext(LoginsContext);

    const [show, setShow] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        if (user === undefined || user === null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [history, user, ])

    return (<>
        {
            (user === null || user === undefined )
                ?  <></>
                :
                ((user.type === "a")) ? <>
                <Nav.Link active variant="primary" onClick={handleShow} className="me-2">
                    {user.nombre}
                </Nav.Link>
                <Offcanvas className="side" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> {"Tutorado"}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>{user.nombre}</Card.Title>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item action><Link style={{textDecoration: "none", color: "black"}}
                                                     onClick={handleClose} to="/alumno">< FcBusinessman/> Perfil
                            tutorado</Link></ListGroup.Item>
                        <ListGroup.Item action><Link style={{textDecoration: "none", color: "black"}}
                                                     onClick={handleClose}
                                                     to="/documentos"><FcFile/> Documentos</Link></ListGroup.Item>
                        <ListGroup.Item action><Link style={{textDecoration: "none", color: "black"}}
                                                     onClick={handleClose}
                                                     to="/calendario">< FcCalendar/> Calendario</Link></ListGroup.Item>
                        <ListGroup.Item action><Link style={{textDecoration: "none", color: "black"}}
                                                     onClick={handleClose} to="/sugerencias"> < FcSurvey/> Quejas /
                            Sujerencias</Link></ListGroup.Item>
                        <ListGroup.Item action><label style={{cursor: "pointer"}} onClick={()=> {logout();  history.push("/"); setShow(false)}}>
                            < BiLogOut/> Cerrar sesion</label></ListGroup.Item>
                    </ListGroup>
                </Offcanvas>
            </> : null}
    </>);
}
