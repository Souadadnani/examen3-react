import { useState } from "react";
import { URL_SERVER } from "../../constantes";

export default function Registrar({setRegistrar}){

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombreUser, setNombreUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrarse = (nombre, apellidos, nombreUser, email, password) => {
        const userToAdd = {
            "nombre": nombre,
            "apellidos": apellidos,
            "username": nombreUser,
            "emailo": email,
            "password": password
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToAdd)
        }
        fetch(`${URL_SERVER}usuarios`, options)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then(data=>{
                setRegistrar(false);
                alert("Usuario Registrado con exito");
            })
            .catch(error=>{
                console.error(error);
            })
    }

    
    return(
        <>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/><br />
        <label>Apellidos</label>
        <input type="text" value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}}/><br />
        <label>Usuario</label>
        <input type="text" value={nombreUser} onChange={(e)=>{setNombreUser(e.target.value)}}/><br />
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
        <label >Password</label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
        <label >Repetir password</label>
        <input type="password"/><br />
        <button onClick={()=>registrarse(nombre, apellidos, nombreUser, email, password)}>Registrar usuario</button>
        </>
    )
}