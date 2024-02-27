import { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import AnunciosPublicados from "./AnunciosPublicados";
import { URL_SERVER } from "../../constantes";
import AnunciosUser from "./AnunciosUser";
import Bienvenida from "./Bienvenida";

export default function GestionAnuncios({usuario, setUsuario}) {

    const [buscada, setBuscada] = useState("");
    const[anunciosPub, setAnunciosPub] = useState([]);
    const [actualizados, setActualizados] = useState(false);

    useEffect(()=>{
   
        fetch(`${URL_SERVER}anuncios?subject_like=${buscada}`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{
            setAnunciosPub(data);
        })
        .catch(error=>{
            console.error(error);
        })
        setActualizados(false);    
}, [buscada, actualizados])

    return (
        <>
            <BarraBusqueda buscada={buscada} setBuscada={setBuscada}></BarraBusqueda>
            {usuario? <Bienvenida usuario={usuario} setUsuario={setUsuario}></Bienvenida> : " "}
            {usuario? <AnunciosUser usuario={usuario} setActualizados={setActualizados} actualizados={actualizados}></AnunciosUser>: <AnunciosPublicados usuario={usuario} anunciosPub={anunciosPub}></AnunciosPublicados>}
        </>
    )
}