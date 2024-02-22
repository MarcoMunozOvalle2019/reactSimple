export function Tarea(task){
    console.log('recibio', task)

    function borra(){
        console.log('..eliminando',task.tarea.id)
        task.deletea.borra(task.tarea.id)
     }
 
    return(
        <div >
            <h1>{task.tarea.title}</h1>
            {console.log('ff',task.tarea.title)}
            <button onClick={borra}>borrar</button>
        </div>         
    )
}