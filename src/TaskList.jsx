import { TaskForm } from './TaskForm'
import { CCProvider } from './context/tareaContex'
import {task as data} from './tasks'
import {useState,useEffect,useContext} from 'react'
import {Contexto} from '../src/context/tareaContex'
import {Tarea} from './Tarea'

function TaskList(){
    const [tasks, setTasks] = useState([])

    useContext(Contexto) 
    const valor = useContext(Contexto) 

    console.log('pasando',valor)
    useEffect(()=>{
        setTasks(data)
    },[])

    if(tasks.length===0){
        return <h1>NOO</h1>
    }

    return (
     <div>
        <TaskForm/>
        {valor.tasks.map(task => 
          <Tarea key={task.id} tarea={task} deletea={valor}/>
        )}

     </div>
  )
}

export default TaskList