import Alert from "../Alert"
import apiCall from "../../api"
import React, {useState, useEffect} from "react"
import {Form, Row, Container, Col} from 'react-bootstrap';
import Swal from "sweetalert2";

export default function Quejas() {
    const [user, setUser] = useState(null)
    const [form, setForm] = useState({id: '', tipo: '', sugerencia: ''})
    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})

    useEffect(() => {
        if (user == null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [user])

    function handleDataUpdate(source, data) {
        switch (source) {
            case 'tipo':
                setForm({...form, tipo: data})
                break;
            case 'sugerencia':
                setForm({...form, sugerencia: data})
                break;
            default:
                break;
        }
    }

    async function Enviar() {
        if ((form.sugerencia !== "") && (form.tipo !== "")) {
            try {
                setForm({...form, id: user.id})
                console.log(form)
                let resultUser = await apiCall({url: "servicios/sugerencias", body: form});
                if (resultUser !== null) {
                    await Toast.fire({icon: 'success', title: 'Se mando tu sugerencia'})
                } else {
                    await Toast.fire({icon: 'error', title: 'Error al prosesar datos'})
                }
            } catch (error) {
                await Toast.fire({icon: 'error', title: 'Error al prosesar datos'})
            }
        } else {
            await Toast.fire({icon: 'error', title: 'Es necesario llenar todos lo campos'})
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form className="m-4 py-5 rounded px-2 text-center"
                              style={{backgroundColor: "rgba(230,230,230,0.7)"}}>
                            <label className="fs-4">Sugerencias</label>
                            <hr/>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" value={(form !== null) ? form.sugerencia : ""} rows={3}
                                              placeholder="Inserte su queja o sugerencia (500 caracteres)"
                                              onChange={(e) => {
                                                  handleDataUpdate("sugerencia", e.target.value)
                                              }} maxLength="500"/>
                            </Form.Group>
                            <Alert text="Enviar Sujerencia" header="Sujerencias"
                                   body="Tu sugerencia sera enviada" boton="Enviar" metodo={Enviar}/>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}