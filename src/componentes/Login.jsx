import { useState } from "react";
import { URL_SERVER } from "../../constantes";

export default function Login({setUsuario, setRegistrar}){

    const [nombreUser, setNombreUser] = useState("");
    const [password, setPassword] = useState("");

    const login = (nameUsuario, passwrd) => {
        fetch(`${URL_SERVER}usuarios?username_like=${nameUsuario}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then(data=>{
                if(data.length > 0){
                    const userServer = data[0];
                    if(userServer.password === passwrd){
                        setUsuario(userServer.username);
                    }else{
                        alert("contraseña incorrecta");
                    }
                }else{
                    alert("Usuario no existe");
                }
            })
            .catch(error=>{
                console.error(error);
            })
    }

    const doRegistro = () =>{
        setRegistrar(true);
    }
    
    return(
        <>
        <label>Nombre Usuario</label>
        <input type="text" value={nombreUser} onChange={(e)=>setNombreUser(e.target.value)}/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>login(nombreUser, password)}>Iniciar sesion</button>

        <button onClick={doRegistro}>Registrar nuevo usuario</button><br />
        </>
    )
}