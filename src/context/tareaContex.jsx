import {task} from '../tasks'
import {createContext, useState, useEffect} from 'react'

import {task as data} from '../tasks'


export const Contexto = createContext()

export function CCProvider(props){
  
  const [tasks, setTasks] = useState([])

  useEffect(()=>{   //para la primera vez
    setTasks(data)
  },[])

  function crea(esto){
    setTasks([...tasks, esto])
  }

  function borra(esto){
    console.log('llego1 ', esto)
    console.log('llego2 ', tasks)
    const sal=tasks.filter(aca=>aca.id !== esto)
    console.log('llego3 ', sal)
    setTasks(sal)
  }
  return (
    <Contexto.Provider value={{tasks,crea,borra}}> 
        {props.children}
    </Contexto.Provider>
  )
}