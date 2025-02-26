import { useState, useEffect } from 'react'

export const Peticiones = () => {

    const [usuarios,setUsuarios] = useState([])

    const obtenerDatos = async() => {
        let respuesta = await fetch ("https://dummyjson.com/user")
        let datos = await respuesta.json()
        setUsuarios (datos.users)
    }

    useEffect(()=>{
        obtenerDatos()
    },[])

    if (usuarios.length  ==0){
        return <>
        <h1>Cargando</h1>
        </>
    }
    console.log(usuarios)
return <div>
    <h1>Usuarios:</h1>
    {usuarios.map((element, index) => {
    console.log (element.firstName)
    return<> 
    <h2> Nombre: {element.firstName} </h2>
    <h2>Edad: {element.age}</h2>
    <h4>{element.age<30? "Es menor de 30":"Es mayor de 30"}</h4>
    </>
    })}

    </div>
}