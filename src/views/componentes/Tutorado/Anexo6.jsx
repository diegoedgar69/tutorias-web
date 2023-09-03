import {Button, Modal} from "react-bootstrap"
import {useState} from "react"
import {BsFileEarmark} from "react-icons/bs"

export default function Anexo6() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="btn btn-warning"><BsFileEarmark/></button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ANEXO 6. FICHA DE IDENTIFICACIÓN DEL TUTORADO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Este formulario es confidencial, tus respuestas serán utilizadas para mejorar el servicio que puede brindar el Instituto tecnológico. Por lo que se te pide contestar todas las preguntas con la mayor sinceridad
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <label>DATOS GENERALES</label>
                    </div>
                    <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                    <form className="justify-content-center">
                        {/*numero de contorl en back*/}
                        {/*carrera en back*/}
                        <label>Semestre actual:</label>
                        <input className="my-1 form-control" type="number" placeholder="Semestre actual"/>
                        {/*fecha en back*/}
                        {/*apellido parerno en back*/}
                        {/*apellido marerno en back*/}
                        {/*sexo en back*/}
                        {/*email en back*/}
                        {/*celular 1 en back*/}
                        <label>Telefono:</label>
                        <input className="my-1 form-control" type="number" placeholder="Telefono (opcional, diferente del sii)"/>
                        <label>Fecha de nacimiento:</label>
                        <input className="my-1 form-control" type="datetime-local" placeholder="Fecha de nacimiento"/>
                        <label>Ligar de necimiento:</label>
                        <input className="my-1 form-control" type="text" placeholder="Lugar de nacimiento"/>
                        <label>Estado civil:</label>
                        <select className="my-1 form-control" id="inlineFormCustomSelectPref">
                            <option selected>Estado civil...</option>
                            <option value="casado">Casado</option>
                            <option value="soltero">Soltero</option>
                            <option value="otro">otro</option>
                        </select>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Domicilio actual:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Pais:</label>
                        <input className="my-1 form-control" type="text" placeholder="Pais"/>
                        <label>Estado:</label>
                        <input className="my-1 form-control" type="text" placeholder="Estado"/>
                        <label>Codigo postal:</label>
                        <input className="my-1 form-control" type="number" placeholder="Codigo postal"/>
                        <label>Poblacion:</label>
                        <input className="my-1 form-control" type="text" placeholder="Poblacion"/>
                        <label>Colonia:</label>
                        <input className="my-1 form-control" type="text" placeholder="Colonia"/>
                        <label>Calle:</label>
                        <input className="my-1 form-control" type="text" placeholder="Calle"/>
                        <label>Numero interior:</label>
                        <input className="my-1 form-control" type="text" placeholder="Numero exterior"/>
                        <label>Numero exterior:</label>
                        <input className="my-1 form-control" type="text" placeholder="Numero interior (Opcional)"/>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <label>ESCUELA</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Escolaridad</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escolaridad...</option>
                            <option value="preparatoria">Preparatoria</option>
                            <option value="bachilleraro">Bachillerato tecnico</option>
                            <option value="otro">otro</option>
                        </select>
                        <label>Nombre de la institucion</label>
                        <input className="form-control" type="text" placeholder="Nombre de la institucion"/>
                        <label>¡Has estado becado?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Has estado becado...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                        <label>Institucion que otorgo la beca:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Institucion...</option>
                            <option value="gobierno estatal">Gobierno estatal</option>
                            <option value="gobierno federal">Gobierno federal</option>
                            <option value="esfuerzos de bachillerto">Esfuerzos de bachillerto</option>
                        </select>
                        <label>¿Donde viviras?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>En el transcurso de tus estudios viviras...</option>
                            <option value="mi familia">Mi Familia</option>
                            <option value="familiares cercanos">Famimliares cercanos</option>
                            <option value="con estudiantes">Con otros estudiantes</option>
                            <option value="solo">Solo</option>
                        </select>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <label>TRABAJO</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>¿Trabajas?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Trabajas...</option>
                            <option value="si">Si</option>
                            <option value="no">no</option>
                        </select>
                        <label>Nombre de la empresa:</label>
                        <input className="my-1 form-control" type="text" placeholder="Nombre de la empresa"/>
                        <label>Hora de salida y entrada:</label>
                        <input className="my-1 form-control" type="text" placeholder="Horario (inicio-final)"/>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <label>FAMILIA</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Escolaridad de tu padre:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escolaridad padre...</option>
                            <option value="primaria">primaria</option>
                            <option value="secundaria">secundaria</option>
                            <option value="preparatoria">Preparatoria</option>
                            <option value="tecnico">Tecnico</option>
                            <option value="licenciatura">Licenciatura</option>
                            <option value="posgrado">Posgrado</option>
                            <option value="sin estudios">Sin estudios</option>
                        </select>
                        <label>Escolaridad de tu madre:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escolaridad madre...</option>
                            <option value="primaria">primaria</option>
                            <option value="secundaria">secundaria</option>
                            <option value="preparatoria">Preparatoria</option>
                            <option value="tecnico">Tecnico</option>
                            <option value="licenciatura">Licenciatura</option>
                            <option value="posgrado">Posgrado</option>
                            <option value="sin estudios">Sin estudios</option>
                        </select>
                        <label>¿Tu madre esta?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Estatus madre...</option>
                            <option value="vivo">Vivo</option>
                            <option value="finado">Finado</option>
                        </select>

                        <label>¿Tu padre esta?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Estatus madre...</option>
                            <option value="vivo">Vivo</option>
                            <option value="finado">Finado</option>
                        </select>
                        <label>¿Donde trabaja tu padre?</label>
                        <input className="my-1 form-control" type="text" placeholder="lugar de trabajo de padre"/>
                        <label>¿Donde trabaja tu madre?</label>
                        <input className="form-control" type="text" placeholder="lugar de trabajo de madre"/>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <label>EN CASO DE MERGENCIA AVISAR A</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Nombre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                        <label>Telefono:</label>
                        <input className="my-1 form-control" type="text" placeholder="Telefono"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success">GUARDAR DATOS</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}