import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "../views/Home";
import Footer from "../views/Footer";
import FOF from "../views/404";
import Error from "../views/ErrorP";
import Mensajes from "../views/Mensajes";
import NavBar from "../views/Navbar";
import Quejas from "../views/Quejas";
import Logcorgen from "../views/LogCoordGeneral";
import Tutorado from "../views/componentes/Tutorado/Tutorado";
import Calenadrio from "../views/componentes/Tutorado/calendario";
import Documentos from "../views/componentes/Tutorado/Documentos";

export default function Routes() {
    return (<Router basename= "tutorias-web">
        <NavBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/log-service" exact>
                <Logcorgen/>
            </Route>
            <Route path="/alumno" exact>
                <Tutorado/>
            </Route>
            <Route path="/error" exact>
                <Error/>
            </Route>
            <Route path="/calendario" exact>
                <Calenadrio/>
            </Route>
            <Route path="/documentos" exact>
                <Documentos/>
            </Route>
            <Route path="/sugerencias" exact>
                <Quejas/>
            </Route>
            <Route path="/mensajes" exact>
                <Mensajes/>
            </Route>
            <FOF/>
        </Switch>
        <Footer/>
    </Router>);
}

