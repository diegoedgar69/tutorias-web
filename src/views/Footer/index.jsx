import { Col, Row } from 'react-bootstrap'
import conacyt from "../../images/sitiosInteres/conacit.png"
import conrecyt from "../../images/sitiosInteres/conreict.png"
import contraloria from "../../images/sitiosInteres/contraloria.png"
import elibro from "../../images/sitiosInteres/elibro.png"
import inai from "../../images/sitiosInteres/inai.png"
import obligaciones from "../../images/sitiosInteres/obligaciones.png"
import occ from "../../images/sitiosInteres/occmundial.png"
import prpdep from "../../images/sitiosInteres/prodep.png"

export default function Footer() {

    return (
        <>
      
        <div style={{padding: "0px 12px 0px 0px"}}>
        <Row className="text-center " style={{ backgroundColor: "rgba(230,230,230,0.7)" }}>
                    <p className="display-3 mb-3">Sitios de Interés</p>
                    <hr/>
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
            <Row style={{ backgroundColor: "#1c3c6c", color: "white" }} className="p-4">
                <Col className="mb-3 p-5">
                    <h3>Dirección</h3>
                    <p>Av. Instituto Tecnológico s/n Crucero del Cayaco C.P. 39905</p>
                    <h3>Contacto</h3>

                    Email: dir_acapulco@tecnm.mx
                        <br />
                        Conmutador:
                        <br />
                        (744) 442-9010
                        <br />
                        (744) 442-9011

                </Col>
                <Col className="col-md-6 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.613825322547!2d-99.81340031198549!3d16.85592495937817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5a0221bd1623%3A0x2162d17e99742acb!2sInstituto%20Tecnol%C3%B3gico%20de%20Acapulco!5e0!3m2!1ses-419!2smx!4v1582150053706!5m2!1ses-419!2smx" width="auto" height="auto" frameBorder="0" style={{border:0}} title="Google Maps"></iframe>
                </Col>
                    <Col className="col-12 text-center">
                    <hr />
                    © Copyright 2021 TecNM Campus Acapulco - Todos los Derechos Reservados
                    </Col>
                
            </Row>
        </div>
        </>
    );
    
}