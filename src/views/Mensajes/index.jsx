import React from "react"
import {Container, Row, Col} from "react-bootstrap"


export default function Mensajes(){
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={3}>
        Lista de mensajes
                </Col>
                <Col>
                    mensajes a motrar
                </Col>
            </Row>
        </Container>
        </>
    );
}