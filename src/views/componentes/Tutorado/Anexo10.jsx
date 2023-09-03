import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { BsFileEarmark } from "react-icons/bs"

export default function Anexo10() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="btn btn-warning"><BsFileEarmark/></button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Anexo 10 ANALISIS FODA
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Es una herramienta para conocer la situación real y actual en que se encuentra una persona, organización,
                    empresa o proyecto analizando sus características internas (<b>D</b>ebilidades y <b>F</b>ortalezas) y su situación externa
                    (<b>A</b>menazas y <b>O</b>portunidades) y planificar una estrategia de mejora a futuro.
                    <br/>
                    <br/>
                    Durante la etapa de planificación estratégica y a partir del análisis FODA se debe poder contestar cada una de las siguientes preguntas:
                    <br/>
                    <br/>
                    <ul>
                        <li>¿Cómo se puede destacar cada fortaleza?</li>
                        <li>¿Cómo se puede disfrutar cada oportunidad?</li>
                        <li>¿Cómo se puede defender cada debilidad?</li>
                        <li>¿Cómo se puede detener cada amenaza?</li>
                    </ul>
                    Este recurso fue creado a principios de la década de los setenta. El objetivo del análisis FODA es determinar las ventajas competitivas personales para ponderarlas y fortalecer aquellas debilidades que se detecten y convertirlos en oportunidades.
                    <br/>
                    <br/>
                    A continuación realiza tu Análisis FODA contestando con toda veracidad en los espacios para ello destinados.
                    <br/>
                    <br/>
                    <center><b>Paso 1: INTROSPECCIÓN. Fortalezas.</b></center>
                    <b>Objetivo:</b>
                    <br/>
                    Identifique lo que tiene que construir en el siguiente capítulo de tu vida. Tome conciencia de qué recursos, capacidades y cualidades conforman tus fortalezas principales.
                    <br/>
                    <br/>
                    <b>Instrucciones:</b>
                    <br/>
                    <ol>
                        <li>Conviértete en “observador desapegado” y revisa tu línea de vida.</li>
                        <li>Contesta las siguientes preguntas y escribe tus respuestas en los espacios destinados para ello.</li>
                    </ol>
                    Revisa la línea de vida y observa aquellos momentos en los cuales experimentaste los mayores éxitos o victorias.
                    ¿Qué talentos especiales sacaste a relucir en dichos momentos? Identifica cuáles son tus mayores talentos. Estos pueden ser habilidades o competencias. Escríbelos aquí:
                    <div class="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br/>
                    <br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success">GUARDAR DATOS</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}