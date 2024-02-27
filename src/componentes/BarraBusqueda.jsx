export default function BarraBusqueda ({buscada, setBuscada}) {

    return(
        <div>
            <input type="text" placeholder="Buscar anuncio por asunto" value={buscada} onChange={(e)=>setBuscada(e.target.value)} />
        </div>        
    )
}