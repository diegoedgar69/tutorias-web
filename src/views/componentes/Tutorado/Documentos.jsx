import Swal from 'sweetalert2'
import {BsFillCloudUploadFill, BsEye} from "react-icons/bs"
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Container, Row, Col, Button, Modal, Image, Card} from 'react-bootstrap';

import apiCall from "../../../api"
import Anexo6 from './Anexo6';
import Anexo8 from './Anexo8';
import Anexo10 from './Anexo10';
import Alert from "../../Alert";

export default function Arvhivos() {
    const history = useHistory();
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    const [docs, setDocs] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})

    useEffect(() => {
        if (user === undefined || user === null) {
            setDocs(JSON.parse(localStorage.getItem("user")))
        } else {
            if (user.id !== "" && user.id !== undefined) {
                dataDocumentos().then(() => {
                })
            }
        }

        if (localStorage.getItem("user") === null || localStorage.getItem("user") === undefined) {
            history.push("/");
        }

    }, [user, history, refresh])

    async function dataDocumentos() {
        try {
            let resultUser = await apiCall({url: "formularios/documentos/busqueda", body: {id: user.id}});
            if (resultUser !== null) {
                await Toast.fire({icon: 'success', title: "Exito"})
                setDocs(resultUser)
            } else {
                await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
                setDocs(null)
            }

        } catch (error) {
            await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
            setDocs(null)
        }
    }

    return (
        <>
            {(docs === null || docs === undefined) ?
                <Container fluid className="text-center py-3 " style={{backgroundColor: "rgba(230,230,230,0.7)"}}>
                    <Row>
                        <Col className="col">
                            <hr/>
                            <label className="alert alert-danger" role="alert">Problemas al cargar Doscumentos</label>
                            <hr/>
                        </Col>
                    </Row>
                </Container> :

                <Container fluid style={{backgroundColor: "rgba(230,230,230,0.7)"}}>
                    <Row className="justify-content-center text-center p-3">

                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>ANEXO 6. FICHA DE IDENTIFICACIÓN DEL TUTORADO</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.identificacionTutoradoAnexo6 === "")
                                    ? <Anexo6/>
                                    : <div className="alert alert-success">
                                        <button className="btn btn-success">VER ANEXO 6</button>
                                    </div>
                                }
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>ANEXO 8 FORMATO DE ENTREVISTA</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.anexo8 === "entregado")
                                    ? <div className="alert alert-success">
                                        <button className="btn btn-success">VER ANEXO 8</button>
                                    </div>
                                    : (docs.formatoEntrevistaAnexo8 === "")
                                        ? <Anexo8/>
                                        : <><label className="alert alert-success">VER ANEXO 6</label> </>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>CARTILLA DE SEGURO SOCIAL</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.cartillaImss === "")
                                    ? <SubirDocumento name="Subir" nombre="CARTILLA DE SEGURO SOCIAL" tipo="imss"/>
                                    : <>
                                        <SubirDocumento name="Actualizar" nombre="CARTILLA DE SEGURO SOCIAL"
                                                        tipo="imss"/>
                                        <VerImagen nombre="CARTILLA DE SEGURO SOCIAL" data={docs.cartillaImss}/>
                                    </>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>CERTIFICADO BACHILLER / PREPARATORIA</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.certificadoPrepaBachiller === "")
                                    ? <SubirDocumento name="Subir" nombre="Certificado de bachilles / Preparatoria"
                                                      tipo="certificado"/>
                                    : <>
                                        <SubirDocumento name="Actualizar"
                                                        nombre="Certificado de bachilles / Preparatoria"
                                                        tipo="certificado"/>
                                        <VerImagen nombre="Certificado de bachilles / Preparatoria"
                                                   data={docs.certificadoPrepaBachiller}/>
                                    </>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Anexo 10 ANALISIS FODA</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.analisisFodaAnexo10 === "")
                                    ? <Anexo10/>
                                    : <div className="alert alert-success">
                                        <button className="btn btn-success">VER ANALISIS FODA</button>
                                    </div>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>HORARIO ESCOLAR</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.horario === "")
                                    ? <SubirDocumento name="Subir" nombre="HORARIO ESCOLAR" tipo="horario"/>
                                    : <>
                                        <SubirDocumento name="Actualizar" nombre="HORARIO ESCOLAR" tipo="horario"/>
                                        <VerImagen nombre="HORARIO ESCOLAR" data={docs.horario}/>
                                    </>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>RETICULA DE CARRERA</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.reticulaCarrera === "")
                                    ? <SubirDocumento name="Subir" nombre="RETICULA DE CARRERA" tipo="reticula"/>
                                    : <>
                                        <SubirDocumento name="Actualizar" nombre="RETICULA DE CARRERA" tipo="reticula"/>
                                        <VerImagen nombre="RETICULA DE CARRERA" data={docs.reticulaCarrera}/>
                                    </>}
                            </Card.Footer>
                        </Card>
                        <Card className={"p-0 m-1"} style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>CREDENCIAL DE ESTUDIANTE</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {(docs.credencial === "")
                                    ? <SubirDocumento name="Subir" nombre="CREDENCIAL DE ESTUDIANTE" tipo="credencial"/>
                                    : <>
                                        <SubirDocumento name="Actualizar" nombre="CREDENCIAL DE ESTUDIANTE"
                                                        tipo="credencial"/>
                                        <VerImagen nombre="CREDENCIAL DE ESTUDIANTE" data={docs.credencial}/>
                                    </>}
                            </Card.Footer>
                        </Card>
                    </Row>
                </Container>}
        </>
    );


    function SubirDocumento(props) {
        const history = useHistory();
        const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})
        const [show, setShow] = useState(false);
        const [user2, serUser2] = useState({id: JSON.parse(localStorage.getItem("user")).id, documento: "", type: ""});

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        function handleData(source, data) {
            switch (source) {
                case 'documento':
                    var file = document.getElementById("fileInputFoto").files[0];
                    var filereader = new FileReader();
                    filereader.readAsDataURL(file);
                    console.log(user2);
                    filereader.onload = function (evt) {
                        serUser2({...user2, documento: evt.target.result, type: props.tipo});
                    }
                    break;
                default:
                    serUser2({...user2, documento: "", type: props.tipo});
                    break;
            }
        }


        async function enviarDocumento() {
            try {
                let resultUser = await apiCall({url: "formularios/documentos", body: user2});
                if (resultUser !== null) {
                    await Toast.fire({icon: 'success', title: "Envio correcto"})
                    setRefresh(!refresh)
                    handleClose()
                } else {
                    await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
                    handleData("")
                    handleClose()
                }
            } catch (error) {
                await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
                handleData("")
                handleClose()
            }
        }

        return (<>
            <br/>
            <Button className={"btn btn-success mx-1 my-1"}
                    onClick={handleShow}> {(props.name === "Subir" || props.name === "Actualizar")
                ? <BsFillCloudUploadFill/>
                : <BsFillCloudUploadFill/>
            }</Button>

            <Modal show={show} size="lg" onHide={handleClose} backdrop="static"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>||
                    <Modal.Title>{props.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Selecione una nueva imagen</label>
                        <input className="form-control" type="file" id="fileInputFoto" onChange={(e) => {
                            handleData('documento', e.target.value)
                        }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Alert
                        header="¿Esta seguro de realizar esta accion?"
                        body="Tus documentos deben de ser oficiales. procura tener una imagen apta apta"
                        text="Enviar"
                        boton="Aceptar"
                        metodo={enviarDocumento}
                    />
                </Modal.Footer>
            </Modal>
        </>);
    }

    function VerImagen(props) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (<>
            <Button className="btn btn-success" onClick={handleShow}><BsEye/></Button>

            <Modal show={show} size="lg" onHide={handleClose} backdrop="static"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.data} rounded style={{width: "100%"}}/>
                </Modal.Body>
            </Modal>
        </>);
    }

}
