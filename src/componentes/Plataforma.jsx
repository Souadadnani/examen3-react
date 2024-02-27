import GestionAnuncios from "./GestionAnuncios";
import GestionUsuarios from "./GestionUsuarios";

export default function Plataforma({usuario, setUsuario}) {
    return(
        <>
            {usuario? " " : <GestionUsuarios usuario={usuario} setUsuario={setUsuario}></GestionUsuarios>}
            <GestionAnuncios usuario={usuario} setUsuario={setUsuario}></GestionAnuncios>
            
        </>
    )
}