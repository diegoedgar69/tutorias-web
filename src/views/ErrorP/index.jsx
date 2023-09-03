import { Row, Col, Container } from "react-bootstrap"
import conacyt from "../../images/sitiosInteres/conacit.png"
import conrecyt from "../../images/sitiosInteres/conreict.png"
import contraloria from "../../images/sitiosInteres/contraloria.png"
import elibro from "../../images/sitiosInteres/elibro.png"
import inai from "../../images/sitiosInteres/inai.png"
import obligaciones from "../../images/sitiosInteres/obligaciones.png"
import occ from "../../images/sitiosInteres/occmundial.png"
import prpdep from "../../images/sitiosInteres/prodep.png"


export default function FOF() {
    return (
        <>
            <Container fluid>
                <Row className="m-5">
                    <div class="container">
                        <div class="row row-centered" style={{padding: "10% 0;"}}>
                            <div style={{ backgroundColor : "rgba(236,68,68,1)", color: "white"}}>
                                <span class="h3">¡Ha ocurrido un error!</span>
                            </div>

                            <div style={{ backgroundColor : "rgba(230,230,230,0.4)"}}>
                                
                                    <br />
                                    <p><b>Hemos detectado una posible acción insegura por lo que hemos bloqueado su ingreso a la página. Si el problema persiste intenta con las siguientes soluciones:</b></p>
                                    <ul>
                                        <li>Cierra la herramienta de desarrolladores.</li>
                                        <li>Borra el caché del navegador o los datos guardados asociados.</li>
                                        <li>Revisa que tu navegador no esté haciendo zoom (puede interpretarse como un uso malicioso).</li>
                                        <li>Desactiva una a una las extensiónes instaladas (puede que alguna extensión interfiera con el funcionamiento).</li>
                                    </ul>
                                    <br />

                                    <span><small ><a href="/" className="btn btn-warning mb-3">Volver a inicio</a></small></span>
                                
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className="text-center" style={{ backgroundColor: "#E6E6E6" }}>
                    <p className="display-3 mb-3">Sitios de Interés</p>
                    <div className="text-center">
                        <Row className="mb-4">
                            <Col><a rel="noreferrer" href="https://www.conacyt.gob.mx/" target="_blank" ><img src={conacyt} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="https://www.conricyt.mx/" target="_blank" ><img src={conrecyt} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="http://inicio.ifai.org.mx/SitePages/ifai.aspx" target="_blank" ><img src={inai} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio" target="_blank" ><img src={obligaciones} className="img-fluid" alt="" /></a></Col>
                        </Row>

                        <Row className="mb-4">
                            <Col><a rel="noreferrer" href="https://elibro.net/es/lc/itacapulco/login_usuario/?next=/es/lc/itacapulco/inicio" target="_blank" ><img src={elibro} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="https://acapulco.tecnm.mx/bolsa-de-trabajo/" target="_blank" ><img src={occ} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="https://acapulco.tecnm.mx/prodep/" target="_blank" ><img src={prpdep} className="img-fluid" alt="" /></a></Col>
                            <Col><a rel="noreferrer" href="https://acapulco.tecnm.mx/contraloria-social/" target="_blank" ><img src={contraloria} className="img-fluid" alt="" /></a></Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
}