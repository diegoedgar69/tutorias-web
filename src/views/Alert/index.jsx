import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"

export default function Alert(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function Metodos(){
        props.metodo()
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.text}
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {props.body}
          </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
            </Button>
                    <Button variant="danger" onClick={Metodos}>{props.boton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}