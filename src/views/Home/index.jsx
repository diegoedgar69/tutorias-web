import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {Container, Row, Tabs, Tab, Form, Button} from 'react-bootstrap';

import LoginsContext from "../../contex/logins";

export default function Home() {

    const history = useHistory();
    const [status, setStatus] = useState(false);
    const [key, setKey] = useState('a');
    const [user, setUser] = useState({id: "", pwd: "", type: ""});
    const {getSesion} = useContext(LoginsContext);

    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})

    useEffect(() => {
        let user = localStorage.getItem("user");

        if (user !== undefined && user !== null) {
            switch (JSON.parse(localStorage.getItem("user")).type) {
                case "a":
                    history.push("/alumno");
                    break;
                case "t":
                    history.push("/tutor");
                    break;
                case "cc":
                    history.push("/coordinado-carrera");
                    break;
                case "cg":
                    history.push("/coordinado-general");
                    break;
                default:
                    break;
            }
            setStatus(true)
        } else {
            setStatus(false)
        }


    }, [status, history])


    function handleData(source, data) {
        switch (source) {
            case 'id':
                setUser({...user, id: data, type: key})
                break;
            case 'pwd':
                setUser({...user, pwd: data, type: key})
                break;
            default:
                setUser({...user, pwd: "", id: "", type: key})
                break;
        }
    }

    async function login() {
        const result = await getSesion(user);
        if (result === null) {
            await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
        } else {
            setStatus(!status)
            await Toast.fire({icon: 'success', title: `${user.id}`})
        }
    }

    return (<Container>
        <Row className="m-2">
            {(localStorage.getItem("user") !== undefined ||  localStorage.getItem("user") !== null) ? <>
                <div className="col text-center rounded my-4" style={{backgroundColor: "#E6E6E6"}}>
                    <label className="text-primary mt-4">Inicio de sesion</label>
                    <hr/>
                    <Tabs activeKey={key} onSelect={(k) => {
                        setKey(k);
                        handleData("", "")
                    }}
                          className="d-flex aling-items-center justify-content-center">
                        <Tab eventKey="a" title="Tutorado">
                            <Form className="my-4">
                                <Form.Group className="my-4">
                                    <Form.Control value={user.id} onChange={(e) => {
                                        handleData('id', e.target.value)
                                    }} type="text" placeholder="Numero de control (Tutorado)"/>
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Control value={user.pwd} onChange={(e) => {
                                        handleData('pwd', e.target.value)
                                    }} type="password" placeholder="Contraseña"/>
                                </Form.Group>
                                <Button variant="primary" onClick={login}>Ingresar</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="t" title="Tutor">
                            <Form className="my-4">
                                <Form.Group className="my-4">
                                    <Form.Control value={user.id} onChange={(e) => {
                                        handleData('id', e.target.value)
                                    }} type="text" placeholder="RFC (Tutor)"/>
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Control value={user.pwd} onChange={(e) => {
                                        handleData('pwd', e  .target.value)
                                    }} type="password" placeholder="Contraseña"/>
                                </Form.Group>
                                <Button variant="primary" onClick={login}>Ingresar</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="cc" title="Coordinador de carrera">
                            <Form className="my-4">
                                <Form.Group className="my-4">
                                    <Form.Control value={user.id} onChange={(e) => {
                                        handleData('id', e.target.value)
                                    }} type="text" placeholder="RFC (Coordinador de carrera)"/>
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Control value={user.pwd} onChange={(e) => {
                                        handleData('pwd', e.target.value)
                                    }} type="password" placeholder="Contraseña"/>
                                </Form.Group>
                                <Button variant="primary" onClick={login}>Ingresar</Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </div>
            </> : null}
        </Row>
    </Container>)
}
