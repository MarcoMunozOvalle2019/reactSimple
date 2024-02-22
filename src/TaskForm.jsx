import {useState, useContext} from 'react'
import {Contexto} from '../src/context/tareaContex'

export function TaskForm(){
    const [estado, setEstado]=useState("")

    const valor = useContext(Contexto)

    function envia(evento){
        evento.preventDefault()
        console.log('marco', estado)
        valor.crea({
                id:valor.tasks.length+1,
                title:estado,
                description:"nuevo ingresado"
        })
    }

    return(
        <form onSubmit={envia}>
            <input onChange={(e)=>setEstado(e.target.value)}></input>
            <button>end</button>
        </form>
    )
}