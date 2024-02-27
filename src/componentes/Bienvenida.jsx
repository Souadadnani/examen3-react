export default function Bienvenida({setUsuario, usuario}) {

    const cerrarSesion = () =>{
        setUsuario(null);
    }

    return(
        <>
            <span>Bienvenid@ {usuario}</span>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </>
    )
}