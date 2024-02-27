import { useState, useEffect } from "react";
import { URL_SERVER } from "../../constantes";

export default function AnunciosUser({usuario, setActualizados, actualizados}) {

    const [asunto, setAsunto] = useState("");
    const [texto, setTexto] = useState("");

    const [anunciosUser, setAnunciosUser] = useState([]);

    useEffect(()=>{   
        fetch(`${URL_SERVER}anuncios?anunciante_like=${usuario}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then(data=>{
                setAnunciosUser(data);
            })
            .catch(error=>{
                console.error(error);
            })
            setActualizados(false);      
    }, [usuario, actualizados])
    
    const guardarAnuncio = (asunto, texto) =>{
        const fecha = new Date();
        const fechaActual = fecha.toISOString();
  
        const anuncio = {
            "subject": asunto,
            "texto": texto,
            "anunciante": usuario,
            "fecha_publicacion": fechaActual
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(anuncio)
        }
        fetch(`${URL_SERVER}anuncios`, options)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .catch(error=>{
                console.error(error);
            })
            setActualizados(true);
    }

    const eliminarAnuncio = (anuncio) =>{      
        const options = {
            method: 'DELETE'   
        }
        fetch(`${URL_SERVER}anuncios/${anuncio.id}`, options)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .catch(error=>{
                console.error(error);
            })
            setActualizados(true);
    }

    return(
        <>
        <p>Anuncios: {usuario}</p>
        <h3>Añadir Nuevo Anuncio</h3>

        <label>Asunto</label>
        <input type="text" value={asunto} onChange={(e)=>setAsunto(e.target.value)}/>
        <label>Texto</label>
        <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
        <button onClick={()=>{guardarAnuncio(asunto, texto)}}>Publicar Anuncio</button>

        <ul>
            {
                anunciosUser.map(anuncio=>{
                    return(   
                    <li key={anuncio.id}>Asunto: {anuncio.subject}, Anunciante: {anuncio.anunciante}, Texto: {anuncio.texto}, Fecha Publicacion: {anuncio.fecha_publicacion}  <button onClick={()=>eliminarAnuncio(anuncio)}>Eliminar anuncio</button> </li>                
                )})
            }
            </ul>
        </>
    )
}