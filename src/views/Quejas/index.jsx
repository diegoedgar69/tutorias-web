import Alert from "../Alert"
import apiCall from "../../api"
import { useHistory } from 'react-router-dom';
import LoginsContext from "../../contex/logins";
import React, { useContext, useState, useEffect } from "react"
import { Form, Row, Container, Col } from 'react-bootstrap';

export default function Quejas() {
    const history = useHistory();
    const { tutor, tutorado, coordindaor } = useContext(LoginsContext);
    const [form, formUpdate] = useState({ 'id': '', 'tipo': '', 'queja': '' })

    useEffect(() => {
        if (tutorado !== null) {
            formUpdate({ ...form, id: tutorado.id })
        } else if (tutor !== null) {
            formUpdate({ ...form, id: tutor.id })
        } else if (coordindaor !== null) {
            formUpdate({ ...form, id: coordindaor.id })
        } else {
            formUpdate(null)
        }
    }, [tutorado, tutor, coordindaor])

    useEffect(() => {
        if (form === null) {
            history.push("/");
        }
    }, [form, history])


    function handleDataUpdate(source, data) {
        switch (source) {
            case 'id':
                formUpdate({ ...form, id: data })
                break;
            case 'tipo':
                formUpdate({ ...form, tipo: data })
                break;
            case 'queja':
                formUpdate({ ...form, queja: data })
                break;
            default:
                break;
        }
    }

    async function Enviar() {
        if ((form.id !== "") && (form.queja !== "") && (form.tipo !== "")) {
            try {
                let resultUser = await apiCall({ url: "quejassugerencias/", method: 'post', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
                if (resultUser !== null) {
                    // Actions.pushNotification({ message: "Se a mandado tu mensaje", type: "success", delay: 1500 })
                } else {
                    // Actions.pushNotification({ message: "Error al procesor datos", type: "error", delay: 1500 })
                }


            } catch (error) {
                // Actions.pushNotification({ message: "Error al procesor datos", type: "error", delay: 1500 })
            }
        } else {
            // Actions.pushNotification({ message: "llene todo los campos", type: "error", delay: 1500 })
        }
    }

    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <Form className="m-4 py-5 rounded px-2 text-center" style={{ backgroundColor: "rgba(230,230,230,0.7)" }}>
                            <label className="fs-4">Quejas / Sugerencias</label>
                            <hr />
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario:</Form.Label>
                                <Form.Control type="text" value={(form !== null) ? form.id : ""} readOnly={true} />
                            </Form.Group>
                            <hr />
                            <Form.Group className="mb-3">
                                <Form.Label>Tipo</Form.Label>

                                <div className="mb-3">
                                    <Form.Check inline label="Sugerencia" name="group1" type="radio" onChange={() => { handleDataUpdate("tipo", "Sugerencia") }} />
                                    <Form.Check inline label="Queja" name="group1" type="radio" onChange={() => { handleDataUpdate("tipo", "Queja") }} />
                                </div>
                            </Form.Group>
                            <hr />
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" value={(form !== null) ? form.queja : ""} rows={3} placeholder="Inserte su queja o sugerencia (500 caracteres)" onChange={(e) => { handleDataUpdate("queja", e.target.value) }} maxLength="500" />
                            </Form.Group>
                            <Alert text="Enviar Queja / Sujerencia" header="Quejas / Sujerencias" body="Tu queja / sugerencia sera enviada" boton="Enviar" metodo={Enviar} />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}