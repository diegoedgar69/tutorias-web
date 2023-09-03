import apiCall from "../../../api"
import { useHistory } from 'react-router-dom';
import LoginsContext from "../../../contex/logins";
import React, { useState, useContext, useEffect } from 'react'
import { ListGroup, Row, Container, Col, Button, Modal, Form, Spinner } from 'react-bootstrap';


export default function Demoapp() {
    const history = useHistory();
    const { tutorado } = useContext(LoginsContext);
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([]);
    const [citas, setCitas] = useState([]);
    const [mostrar, setMostrar] = useState(false);



    useEffect(() => {
        if (tutorado !== null) {
            calendario(tutorado.id)
        } else {
            history.push("/");
        }
    }, [tutorado])


    async function rechard() {
        setMostrar(true)
        await setTimeout(() => { console.log("World!"); }, 1000);
        setMostrar(false)
    }


    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    function handleEvents(events) {
        setCurrentEvents(events)
    }

    function handleWeekendsToggle() {
        setWeekendsVisible(!weekendsVisible)
    }

    async function calendario(id) {
        try {
            let resultUser = await apiCall({ url: "vercitastutorado/", method: 'post', body: JSON.stringify({ id: id }), headers: { 'Content-Type': 'application/json' } });
            if (resultUser !== null) {
                setCitas(resultUser)
                rechard()
            } else {
                setCitas([])
            }

        } catch (error) {
            setCitas([])
        }

    }

    return (
        <>
            <Container fluid className="py-1" style={{ backgroundColor: "rgba(230,230,230,0.2)" }}>
                <Row>
                    <Col sm={3} >
                        <ListGroup>
                            <ListGroup.Item className="text-center lead">Instrucciones</ListGroup.Item>
                            <ListGroup.Item>Seleciona el dia en que quieres las tutorias / asesoria y selecionas la hora disponible</ListGroup.Item>
                            <ListGroup.Item>Da click en la cita para elimiarla</ListGroup.Item>
                            <ListGroup.Item><input type='checkbox' checked={weekendsVisible} onChange={handleWeekendsToggle} /> Mostrar fines de semana</ListGroup.Item>
                            <ListGroup.Item className="text-center lead">Citas</ListGroup.Item>
                            <ListGroup.Item style={{ cursor: "pointer" }} className="text-center"><ModalForm metodo={calendario} mrtodo2={rechard} /></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="my-5">

                    </Col>
                </Row>
            </Container>
        </>
    )
}


function ModalForm(props) {
    const { tutorado } = useContext(LoginsContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cita, setCita] = useState({ id: "", start: "", tutor: "", tipo: '' });

    useEffect(() => {
        if (tutorado !== null) {
            if (tutorado.id !== undefined) {
                handleDataTutorado('id', tutorado.id)
            }
        }
    }, [tutorado])

    function handleDataTutorado(source, data) {
        switch (source) {
            case 'start':
                setCita({ ...cita, start: data })
                break;
            case 'tipo':
                setCita({ ...cita, tipo: data })
                break;
            case 'tutor':
                setCita({ ...cita, tutor: data })
                break;
            case 'id':
                setCita({ ...cita, id: data })
                break;
            default:
                break;
        }

    }


    async function dataTutorado(id) {

        try {
            let resultUser = await apiCall({ url: "datostutor/", method: 'post', body: JSON.stringify({ id: id }), headers: { 'Content-Type': 'application/json' } });

            if (resultUser.detail !== "Not Found") {
                handleDataTutorado('tutor', resultUser.tutor)
            } else {
                handleDataTutorado('tutor', "")
            }

        } catch (error) {
            handleDataTutorado('tutor', "")
        }

    }


    async function Enviar() {
        if ((cita.id !== "") && (cita.tutor !== "") && (cita.start !== "") && (cita.tipo !== "")) {
            try {
                let resultUser = await apiCall({ url: "crearcitatutorado/", method: 'post', body: JSON.stringify(cita), headers: { 'Content-Type': 'application/json' } });
                if (resultUser !== null) {
                    // Actions.pushNotification({ message: "Se guardo la cita", type: "success", delay: 1500 })
                } else {
                    // Actions.pushNotification({ message: "Error al procesor datos", type: "error", delay: 1500 })
                }
                handleClose()
                await props.metodo(tutorado.id)
                props.mrtodo2()

            } catch (error) {
                // Actions.pushNotification({ message: "Error al procesor datos", type: "error", delay: 1500 })
            }
        } else {
            // Actions.pushNotification({ message: "llene todo los campos", type: "error", delay: 1500 })
        }
    }

    return (
        <>
            <label style={{ cursor: "pointer" }} onClick={handleShow}>
                Registrar nueva reunion
            </label>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro de Tutorias</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero de control</Form.Label>
                            <Form.Control className="mb-3" type="text" value={cita.id} readOnly={true} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tutor</Form.Label>
                            <Form.Control type="text" value={cita.tutor} onClick={(e) => { dataTutorado(tutorado.id) }} readOnly={true} placeholder="Dame click para mostrar al tutor" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="mt-2">Hora de inicio</Form.Label>
                            <Form.Control type="datetime-local" value={cita.start} onChange={(e) => { handleDataTutorado('start', e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3 text-center">
                            <label>Tipo de reunion</label><br />
                            <Form.Check inline label="En linea" name="group1" type="radio" onChange={() => { handleDataTutorado("tipo", "online") }} />
                            <Form.Check inline label="Presencial" name="group1" type="radio" onChange={() => { handleDataTutorado("tipo", "presencial") }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        cerrar
                    </Button>
                    <Button variant="primary" onClick={Enviar}>
                        Guardar nueva cita
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}