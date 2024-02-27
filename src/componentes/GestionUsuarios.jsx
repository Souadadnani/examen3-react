import { useState } from "react"
import Login from "./Login";
import Registrar from "./Registrar";
import Bienvenida from "./Bienvenida";


export default function GestionUsuarios({setUsuario}) {
    const [registrar, setRegistrar] = useState(false);

    return (
        <>
            {registrar? <Registrar setRegistrar={setRegistrar}></Registrar> : <Login setUsuario={setUsuario} setRegistrar={setRegistrar}></Login>}
        </>
    )
}