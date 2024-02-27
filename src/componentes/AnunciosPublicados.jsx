import { URL_SERVER } from "../../constantes";

export default function AnunciosPublicados({anunciosPub}){

    return(
        <>  
            <h3>Anuncios Publicados</h3>
            <ul>
            {
                anunciosPub.map(anuncio=>{
                    return(   
                    <li key={anuncio.id}>Asunto: {anuncio.subject}, Anunciante: {anuncio.anunciante}, Texto: {anuncio.texto}, Fecha Publicacion: {anuncio.fecha_publicacion}</li>                
                )})
            }
            </ul>
        </>
    )
}