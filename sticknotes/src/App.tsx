import { useState } from 'react';
import './App.css'
 
export default function App(){
  const [valores, setValores] = useState("")
  const [tarefas, setTarefas] = useState<string[]>([])

  function registrador(){
    if(!valores){
      return
    }
    setTarefas( tarefas => [...tarefas, valores])
    setValores("")
  }



  return(

    <div className='container'>

        <h2> Listagem de Tarefas </h2>

      <div className='inputInfo'>
        <input placeholder='Digite a tarefa a ser adicionada'
        className='input'
        value={valores}
        onChange={(e) => setValores(e.target.value)}
        />
        <button className='button' onClick={registrador}> Inserir </button>
      </div>


      {tarefas.map((item, index) => (
        <section key={item}>

          <div>
          <span>{item}</span>
          <button>Editar</button>
          <button>Excluir</button>
          </div>

        </section>
      ))}

   </div>

)


}
