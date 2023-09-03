import { Row, Container } from "react-bootstrap"
import { Calendar } from '@fullcalendar/core';

export default function FOF() {
    const name = Calendar.name;  
    return (
        <>
            <Container fluid>
                <Row className="p-4 m-4 text-center rounded" style={{ backgroundColor: "#E6E6E6" }}>
                    <div>
                        <p className="display-3">
                            Página no encontrada
                        </p>
                        <p className="lead">Lo sentimos, pero la página que busca no existe</p>
                    </div>
                </Row>
            </Container>
        </>
    );
}