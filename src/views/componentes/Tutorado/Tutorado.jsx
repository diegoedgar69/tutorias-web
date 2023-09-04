import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Button, Container, Row, Col, Modal, Form, Table, Image} from 'react-bootstrap';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import apiCall from "../../../api"
import UserFoto from "../../../images/default.png"
import Swal from "sweetalert2";
import Alert from "../../Alert";


export default function PanelTutorado() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const [refresh, setRefresh] = useState(false);
    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [datosTabla, setDatosTabla] = useState(null);


    useEffect(() => {
        if (localStorage.getItem("user") === null || localStorage.getItem("user") === undefined) {
            history.push("/");
        }
        setUser(JSON.parse(localStorage.getItem("user")))
        dataTutorado(user.id)
    }, [history, refresh])

    async function dataTutorado(id) {
        try {
            let resultUser = await apiCall({url: "datos/alumno", body: {id: id}});
            if (resultUser !== null) {
                await Toast.fire({icon: 'success', title: "Exito"})
                setDatosTabla(resultUser)
            } else {
                await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
                setDatosTabla(null)
            }

        } catch (error) {
            await Toast.fire({icon: 'error', title: 'Error al iniciar sesion'})
            setDatosTabla(null)
        }
    }


    return (<>
        {(datosTabla !== null)
            ?
            <Container fluid className="text-center py-3 " style={{backgroundColor: "rgba(230,230,230,0.7)"}}>
                <Row className="justify-content-center">
                    <Col className="col-sm-auto col-md-auto col-lg-auto">
                        <hr/>
                        <label className="lead">Datos Generales</label>
                        <hr/>
                        <Table striped bordered hover responsive>
                            <tbody>
                            <tr>
                                {(user != null) ? (user.foto === "") ?
                                    <th rowSpan={2}><Image src={UserFoto} rounded style={{width: "7rem"}}/></th> :
                                    <th rowSpan={2}><Image src={user.foto} rounded style={{width: "7rem"}}/></th> :
                                    <th rowSpan={2}><Image src={UserFoto} rounded style={{width: "7rem"}}/></th>}
                                <th> No. de Control</th>
                                <th> Nombre</th>
                                <th> Apellido Paterno</th>
                                <th> Apellido Materno</th>
                            </tr>
                            <tr>
                                <td> {datosTabla.numero_control}</td>
                                <td> {datosTabla.nombre} </td>
                                <td> {datosTabla.apellidoPaterno} </td>
                                <td> {datosTabla.apellidoPaterno} </td>
                            </tr>
                            <tr>
                                <th><CambioFoto/></th>
                                <th> Correo</th>
                                <th> Carrera</th>
                                <th> Retícula</th>
                                <th> Estatus</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td> {datosTabla.email}</td>
                                <td> {datosTabla.carrera}</td>
                                <td> {datosTabla.reticula}</td>
                                <td> {datosTabla.status}</td>
                            </tr>
                            </tbody>
                        </Table>
                        <hr/>
                        <center>
                            <CambioTutor/>
                        </center>
                    </Col>
                    <Col className="col-sm-auto col-md-auto col-lg-auto">
                        <hr/>
                        <label className="lead">Datos de Tutorias</label>
                        <hr/>
                        <p className="lead">
                            <b>Tutor: </b> {(datosTabla.asesor !== "") ? datosTabla.asesor : "Sin asignar"}
                        </p>
                        <Col className=" my-3">
                            <Pie
                                data={{
                                    labels: ['En linea: ' + datosTabla.horasOnline + " hrs", 'Presencial: ' + datosTabla.horasPresencial + " hrs", 'Restantes: ' + (20 - (datosTabla.horasOnline + datosTabla.horasPresencial)) + " hrs"],
                                    datasets: [{
                                        label: 'Horas de tutoriass',
                                        data: [datosTabla.horasOnline, datosTabla.horasPresencial, (20 - (datosTabla.horasOnline + datosTabla.horasPresencial))],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)'
                                        ],
                                        borderWidth: 3
                                    }]

                                }}
                                width={600}
                                height={400}
                                options={{maintainAspectRatio: false}}
                            />
                        </Col>
                        <center>Horas realizadas de
                            tutorias: {(datosTabla.horasOnline + datosTabla.horasPresencial)}</center>
                    </Col>
                </Row>
            </Container>
            :
            <Container fluid className="text-center py-3 "  style={{backgroundColor: "rgba(230,230,230,0.7)"}}>
                <Row>
                    <Col className="col">
                        <hr/>
                        <label className="alert alert-danger" role="alert">Problemas al cargar informacion de
                            alumno</label>
                        <hr/>
                    </Col>
                </Row>
            </Container>}
    </>);

    function CambioTutor() {
        const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})
        const [show, setShow] = useState(false);
        const [user2, serUser2] = useState({id: user.id, motivo: ""});

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        function handleData(source, data) {
            switch (source) {
                case 'motivo':
                    serUser2({...user2, motivo: data});
                    break;
                default:
                    serUser2({...user2, motivo: ""});
                    break;
            }
        }


        async function enviarSolicitud() {
            try {
                let resultUser = await apiCall({url: "servicios/cambio-asesor", body: user2});
                if (resultUser !== null) {
                    await Toast.fire({icon: 'success', title: resultUser})
                    handleClose()
                } else {
                    await Toast.fire({icon: 'error', title: 'Error al enviar solicitud'})
                    handleData("")
                    handleClose()
                }
            } catch (error) {
                await Toast.fire({icon: 'error', title: 'Error al enviar solicitud'})
                handleData("")
                handleClose()
            }
        }

        return (<>
            <Button className=" w-50 my-3 btn btn-danger btn-sm" onClick={handleShow}>Solicitar cambio de tutor</Button>

            <Modal show={show} size="lg" onHide={handleClose} backdrop="static"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Solicitud de cambio de asesor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="m-3 text-center">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Motivos de cambio:</Form.Label>
                            <Form.Control as="textarea" rows={6} onChange={(e) => {
                                handleData('motivo', e.target.value)
                            }}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Alert
                        header="¿Esta seguro de realizar esta accion?"
                        body="Al aceptar se iniciara el proceso para cambiar al asesor que tiene asignado, es posible que un encargado se comunique con usted"
                        text="Enviar"
                        boton="Aceptar"
                        metodo={enviarSolicitud}
                    />
                </Modal.Footer>
            </Modal>
        </>);
    }

    function CambioFoto() {
        const history = useHistory();
        const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})
        const [show, setShow] = useState(false);
        const [user2, serUser2] = useState({
            id: user.id,
            documento: "",
            type: "foto"
        });

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        function handleData(source, data) {
            switch (source) {
                case 'documento':
                    var file = document.getElementById("fileInputFoto").files[0];
                    var filereader = new FileReader();
                    filereader.readAsDataURL(file);
                    filereader.onload = function (evt) {
                        serUser2({...user2, documento: evt.target.result});
                    }
                    break;
                default:
                    serUser2({...user2, documento: ""});
                    break;
            }
        }


        async function enviarFoto() {
            try {
                let resultUser = await apiCall({url: "formularios/documentos", body: user2});
                if (resultUser !== null) {
                    await Toast.fire({icon: 'success', title: resultUser})
                    let resultFoto = await apiCall({
                        url: "datos/alumno/foto",
                        body: {id: user.id}
                    });
                    localStorage.setItem("user", JSON.stringify({foto: resultFoto, id: user.id,nombre: user.nombre, type: user.type}))
                    handleClose()
                    setRefresh(!refresh)
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
            <Button className={"btn btn-sm btn-primary w-100 text-black"} onClick={handleShow}>Cambiar foto</Button>

            <Modal show={show} size="lg" onHide={handleClose} backdrop="static"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cambio de foto de perfil</Modal.Title>
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
                        body="Tu foto de perfil es necesaria para todos tus documentos oficiales. procura tener una foto apta"
                        text="Enviar"
                        boton="Aceptar"
                        metodo={enviarFoto}
                    />
                </Modal.Footer>
            </Modal>
        </>);
    }

}






