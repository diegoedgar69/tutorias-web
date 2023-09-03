import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
import {useContext, useEffect, useState} from "react";
import {Container, Row, Form, Button, Col} from 'react-bootstrap';

import LoginsContext from "../../contex/logins";

export default function Home() {

    const history = useHistory();
    const {coordindaorGeneral, getCoordinadorGeneral, tutor, tutorado, coordindaor} = useContext(LoginsContext);
    const [userLoaded, setUserLoaded] = useState(false);
    const [logCoordinadorGeneral, setLogCoordinadorGeneral] = useState({id: "", pwd: ""});
    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})


    useEffect(() => {
        if ((tutor !== null) || (tutorado !== null) || (coordindaor !== null) || (coordindaorGeneral !== null)) {
            setUserLoaded(true)
            history.push("/calendario");
        } else {
            setUserLoaded(false)
        }
    }, [tutor, tutorado, coordindaor, coordindaorGeneral, history])


    function handleDataCoordinador(source, data) {
        switch (source) {
            case 'rfc':
                setLogCoordinadorGeneral({...logCoordinadorGeneral, id: data})
                break;
            case 'pass':
                setLogCoordinadorGeneral({...logCoordinadorGeneral, pwd: data})
                break;
            default:
                break;
        }
    }

    async function loginCoordinadorGeneral() {
        const result = await getCoordinadorGeneral(logCoordinadorGeneral);
        if (result === null) {
            Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
        } else {
            Toast.fire({icon: 'success', title: `${logCoordinadorGeneral.id}`})
        }

    }


    return (<Container>
        <Row className="m-2">
            {(userLoaded === false) ? <>
                <Col className="my-4">
                    <Form className="text-center  rounded my-4 p-4" style={{backgroundColor: "#E6E6E6"}}>
                        <label className="text-primary">Inicio de sesion</label>
                        <hr/>
                        <Form.Group className="my-4">
                            <Form.Control value={logCoordinadorGeneral.id} onChange={(e) => {
                                handleDataCoordinador('rfc', e.target.value)
                            }} type="text" placeholder="RFC (Coordinador General)"/>
                        </Form.Group>
                        <Form.Group className="my-4">
                            <Form.Control value={logCoordinadorGeneral.pwd} onChange={(e) => {
                                handleDataCoordinador('pass', e.target.value)
                            }} type="password" placeholder="Contraseña"/>
                        </Form.Group>
                        <Button variant="primary" onClick={loginCoordinadorGeneral}>Ingresar</Button>
                    </Form>
                </Col>
            </> : null}
        </Row>
    </Container>);
}