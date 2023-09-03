import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { BsFileEarmark } from "react-icons/bs"

export default function Anexo8() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="btn btn-warning"><BsFileEarmark/></button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ANEXO 8 FORMATO DE ENTREVISTA
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
                        {/*Nombre en back*/}
                        {/*apellido parerno en back*/}
                        {/*apellido marerno en back*/}
                        <label>Estatura en metros:</label>
                        <input className="my-1 form-control" type="number" placeholder="Estatura"/>
                        <label>Peso en KG:</label>
                        <input className="my-1 form-control" type="number" placeholder="Peso"/>
                        {/*carrera en back*/}
                        <label>Fecha de nacimiento:</label>
                        <input className="my-1 form-control" type="datetime-local" placeholder="Fecha de nacimiento"/>
                        {/*sexo en back*/}
                        {/*edad en back*/}
                        <label>Estado civil:</label>
                        <select className="my-1 form-control" id="inlineFormCustomSelectPref">
                            <option selected>Estado civil...</option>
                            <option value="casado">Casado</option>
                            <option value="soltero">Soltero</option>
                            <option value="otro">otro</option>
                        </select>
                        <label>¿Trabajas?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Trabajas...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                        <label>Nombre de la empresa:</label>
                        <input className="my-1 form-control" type="text" placeholder="Nombre de la empresa"/>
                        <label>Lugar de nacimiento:</label>
                        <input className="my-1 form-control" type="text" placeholder="Lugar de nacimiento"/>
                        <label>Telefono:</label>
                        <input className="my-1 form-control" type="number" placeholder="Telefono (opcional, diferente del sii)"/>
                        <label>Codigo postal:</label>
                        <input className="my-1 form-control" type="number" placeholder="Codigo postal"/>
                        {/*email en back*/}
                        <label>Tipo de vivienda:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Tipo de vivienda...</option>
                            <option value="casa">Casa</option>
                            <option value="departamento">Departamento</option>
                        </select>
                        <label>La casa  o departemento donde vives es:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>La casa  o departemento donde vives es...</option>
                            <option value="propia">Propia</option>
                            <option value="rentada">Rentada</option>
                            <option value="prestada">Prestada</option>
                            <option value="otro">Otro</option>
                        </select>
                        <label>Numero de personas con las que vives:</label>
                        <input className="my-1 form-control" type="number" placeholder="Numero de persoans con las que vives"/>

                        <hr/>
                        <div className={"text-center"}>
                            <label>Datos del Padre:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>

                        <label>Nombre del padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Nombre del padre"/>
                        <label>Edad del padre:</label>
                        <input className="my-1 form-control" type="number" placeholder="Edad del padre"/>
                        <label>Profecion del padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Profecion"/>
                        <label>¿Tabaja el padre?:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>¿Tabaja?...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                        <label>Tipo de trabajo del padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Tipo de trabajo"/>
                        <label>Telefono del padre:</label>
                        <input className="my-1 form-control" type="number" placeholder="Telefono"/>
                        <label>Domicilio del padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Domicilio del padre"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Datos de la madre:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Nombre de la madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Nombre de la madre"/>
                        <label>Edad de la madre:</label>
                        <input className="my-1 form-control" type="number" placeholder="Edad de la madre"/>
                        <label>Profecion de la madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Profecion"/>
                        <label>¿Tabaja la madre?:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>¿Tabaja?...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                        <label>Tipo de trabajo de la madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Tipo de trabajo"/>
                        <label>Telefono de la madre:</label>
                        <input className="my-1 form-control" type="number" placeholder="Telefono"/>
                        <label>Domicilio de la madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Domicilio de la madre"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Nombre de tus hermanos por edad:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <div>
                            <hr />
                            <label>Hermano: 1.</label>
                            <br/>
                            <label>Nombre:</label>
                            <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                            <label>Fecha de nacimiento:</label>
                            <input className="my-1 form-control" type="datetime-local" placeholder="Domicilio de la madre"/>
                            <label>Genero</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Genero...</option>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                            <label>Escolaridad</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escolaridad...</option>
                                <option value="preparatoria">Preparatoria</option>
                                <option value="bachilleraro">Bachillerato tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                        <div>
                            <hr />
                            <label>Hermano: 2.</label>
                            <br/>
                            <label>Nombre:</label>
                            <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                            <label>Fecha de nacimiento:</label>
                            <input className="my-1 form-control" type="datetime-local" placeholder="Domicilio de la madre"/>
                            <label>Genero</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Genero...</option>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                            <label>Escolaridad</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escolaridad...</option>
                                <option value="preparatoria">Preparatoria</option>
                                <option value="bachilleraro">Bachillerato tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                        <div>
                            <hr />
                            <label>Hermano: 3.</label>
                            <br/>
                            <label>Nombre:</label>
                            <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                            <label>Fecha de nacimiento:</label>
                            <input className="my-1 form-control" type="datetime-local" placeholder="Domicilio de la madre"/>
                            <label>Genero</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Genero...</option>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                            <label>Escolaridad</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escolaridad...</option>
                                <option value="preparatoria">Preparatoria</option>
                                <option value="bachilleraro">Bachillerato tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                        <div>
                            <hr />
                            <label>Hermano: 4.</label>
                            <br/>
                            <label>Nombre:</label>
                            <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                            <label>Fecha de nacimiento:</label>
                            <input className="my-1 form-control" type="datetime-local" placeholder="Domicilio de la madre"/>
                            <label>Genero</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Genero...</option>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                            <label>Escolaridad</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escolaridad...</option>
                                <option value="preparatoria">Preparatoria</option>
                                <option value="bachilleraro">Bachillerato tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                        <div>
                            <hr />
                            <label>Hermano: 5.</label>
                            <br/>
                            <label>Nombre:</label>
                            <input className="my-1 form-control" type="text" placeholder="Nombre"/>
                            <label>Fecha de nacimiento:</label>
                            <input className="my-1 form-control" type="datetime-local" placeholder="Domicilio de la madre"/>
                            <label>Genero</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Genero...</option>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                            <label>Escolaridad</label>
                            <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escolaridad...</option>
                                <option value="preparatoria">Preparatoria</option>
                                <option value="bachilleraro">Bachillerato tecnico</option>
                                <option value="otro">otro</option>
                            </select>
                        </div>
                        <label>¿En cuanto asienden los gastos mensuales de tu familia?:</label>
                        <input className="my-1 form-control" type="number" placeholder="Cantidad"/>
                        <label>¿En caso de ser economicamente independiente en cuanto asienden tus ingresos?:</label>
                        <input className="my-1 form-control" type="number" placeholder="Cantidad"/>

                        <hr/>
                        <div className={"text-center"}>
                            <label>Estudios:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>En que primaria estudiaste:</label>
                        <input className="my-1 form-control" type="text" placeholder="Primaria"/>
                        <label>En que secundara estudiaste:</label>
                        <input className="my-1 form-control" type="text" placeholder="Secundaria"/>
                        <label>Bachillerato / Preparatoria:</label>
                        <input className="my-1 form-control" type="text" placeholder="Bachillerato / Preparatoria"/>
                        <label>Estudios superiores:</label>
                        <input className="my-1 form-control" type="text" placeholder="Estudios superiores"/>
                        <label>¿Cuenta con prescripción médica de alguna deficiencia sensorial o funcional que te obligue a llevar aparatos o controlar tu actividad física? </label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">No tecnico</option>
                            <option value="vista">Vista</option>
                            <option value="oido">Oido</option>
                            <option value="lenjuaje">Lenguaje</option>
                            <option value="otro">otro</option>
                        </select>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Estados Psicofisiologicos:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Manos y/o pies inchado:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Dolores en el vientre:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Dolores de cabeza y/o vomito</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Perdida de equilibrio</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Fatiga y/o agotamiento</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Perdida de vista u oido</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Manos y/o pies inchado</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Dificultades para dormir</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Pesadillas o terrores nocturnos</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Incontinencia</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Tartamideo al explicarse</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Miedos intensos ante cosas</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="frecuentem">Frecuente/M</option>
                            <option value="muyfrecuentem">Muy Frecuente/M</option>
                            <option value="nunca">Nunca</option>
                            <option value="antes">Antes</option>
                            <option value="aveces">A veces</option>
                        </select>
                        <label>Obsevaciones de higiene:</label>
                        <input className="my-1 form-control" type="text" placeholder="higiene"/>

                        <hr/>
                        <div className={"text-center"}>
                            <label>Areas de integracion:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Familiar</label>
                        </div>
                        <label>Como es la relacion con tu familia:</label>
                        <input className="my-1 form-control" type="text" placeholder="familiar"/>
                        <label>¿Existe dificultades?</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                        <label>De que tipo:</label>
                        <input className="my-1 form-control" type="text" placeholder="Tipo"/>
                        <label>Que actitud tienes con tu familia:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Padre</label>
                        </div>
                        <label>Como te relacionas con tu padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu padre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Madre</label>
                        </div>
                        <label>Como te relacionas con tu madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu madre:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Hemanos</label>
                        </div>
                        <label>Primer Hermano</label>
                        <br/>
                        <label>Como te relacionas con tu primer hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu primer hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <br/>
                        <label>Segundo Hermano</label>
                        <br/>
                        <label>Como te relacionas con tu segundo hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu segundo hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <br/>
                        <label>tercero Hermano</label>
                        <br/>
                        <label>Como te relacionas con tu tercer hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu tercer hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <br/>
                        <label>Cuarto Hermano</label>
                        <br/>
                        <label>Como te relacionas con tu cuarto hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu cuarto hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <br/>
                        <label>Quinto Hermano</label>
                        <br/>
                        <label>Como te relacionas con tu quinto hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Relacion"/>
                        <label>Como actitud tienes hacia tu quinto hermano:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>

                        <br/>
                        <label>Con quien te sientes mas ligado afectivamente:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="padre">Padre</option>
                            <option value="madre">Madre</option>
                            <option value="hermano">Hermano</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <label>Especifica por que:</label>
                        <input className="my-1 form-control" type="text" placeholder="Epecifica"/>
                        <label>Quin se ocupa directamente de tu educacion:</label>
                        <input className="my-1 form-control" type="text" placeholder="Educacion"/>
                        <label>Quien a influido mas en tu decicion para estudiar esta carrera:</label>
                        <input className="my-1 form-control" type="text" placeholder="Influencia"/>
                        <label>Consideras importante facilitar algun otro dato sobre tu ambiente femiliar:</label>
                        <input className="my-1 form-control" type="text" placeholder="Actitud"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Area Social:</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <hr/>
                        <label>Como es tu relacion con tus compañeros:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="buena">Buena</option>
                            <option value="regular">Regular</option>
                            <option value="mala">Mala</option>
                        </select>
                        <label>Por que:</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Como es tu relacion con tus amigos</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Como es tu relacion con tu pareja</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Como es tu relacion con tus profesores</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Como es tu relacion con las autoridaddes academicas</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Que haces en tu tiempo libre</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Cual es tu actividad recreativa</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Caracteristicas personales (madures y equilibrio):</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Puntual:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Timidez:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Alegre:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Agrecividad:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Abierto a ideas de otros:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Reflexivo/a:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Constante:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Optimista:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Impulsivo:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Silencioso:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Generoso:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Inquieto:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Cambios de humor:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Dominante:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Egoistta:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Sumiso:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Confiado en si mismo:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Imaginativo:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Con iniciativa propia:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Sociable:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Responsable:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Perseverante:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Motivado:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Activo:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <label>Independiente:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="no">no</option>
                            <option value="poco">Poco</option>
                            <option value="Frecuentem">Frecuente/M</option>
                            <option value="mucho">Mucho</option>
                        </select>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Area Pscopedagogica</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>¿Cómo te gustaría ser?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Recibes ayuda en tu casa para la realización de tareas escolares?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Qué problemas personales intervienen en tus estudios?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Cuál es tu rendimiento escolar?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>Menciona las asignaturas que cursas en el semestre actual</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Cuál es tu asignatura preferida? y ¿Por qué?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Cuál es la asignatura en la que sobresales? y ¿Por qué?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Qué asignatura te desagrada?, ¿Por qué?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Cuál es tu asignatura con más bajo promedio del semestre anterior?, ¿Por qué?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Por qué vienes al Tecnológico?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Qué te motiva para venir al Tecnológico?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Cuál es tu promedio general del ciclo escolar anterior?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>

                        <label>¿Tienes asignaturas reprobadas?:</label>
                        <select className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>...</option>
                            <option value="si">Si</option>
                            <option value="no">no</option>
                        </select>
                        <label>¿Cuáles?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Plan de vida y carrera</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>¿Cuáles son tus planes inmediatos?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>¿Cuáles son tus metas en la vida?</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Nombre del entrevistador</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <hr/>
                        <div className={"text-center"}>
                            <label>Caracteristicas personales</label>
                        </div>
                        <hr style={{ height: "2px", backgroundColor: "red", border: "none"}}/>
                        <label>Yo Soy…</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Mi Carácter es…</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>A mí me gusta que…</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Yo Aspiro en la Vida…</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Yo tengo miedo que</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>
                        <label>Pero pienso que podré lograr</label>
                        <input className="my-1 form-control" type="text" placeholder="?"/>


                        <hr/>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success">GUARDAR DATOS</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}