import { useState } from 'react';
import './App.css'
 
export default function App(){
  const [valores, setValores] = useState("")
  const [tarefas, setTarefas] = useState<string[]>([])
  const [edicao, setEdicao] = useState({
    ativo: false,
    tarefa:''
  })

  function registrador(){
    if(!valores){
      return
    }
    if(edicao.ativo){
      salvarEdicao();
      return
    }
    setTarefas( tarefas => [...tarefas, valores])
    setValores("")
  }

  function salvarEdicao(){
    const acharIndexTarefa = tarefas.findIndex( tarefa => tarefa === edicao.tarefa)
    const todasTarefas = [...tarefas]

    todasTarefas[acharIndexTarefa] = valores;
    setTarefas(todasTarefas);

    setEdicao({
      ativo: false,
      tarefa: ''
    })

    setValores("")

  }

  function editar(item: string){
    setValores(item)
    setEdicao({
      ativo: true,
      tarefa: item
    })

  }
  function excluir(item: string){
    const removerTarefa = tarefas.filter(tarefa => tarefa !== item)
    setTarefas(removerTarefa)
  }

  return(

    <div className='container'>

        <h2 className='Title'> Listagem de Tarefas </h2>

      <div className='inputInfo'>
        <input placeholder='Digite a tarefa a ser adicionada'
        className='input'
        value={valores}
        onChange={(e) => setValores(e.target.value)}
        />
        <button className='button' onClick={registrador}> 
            { edicao.ativo ? "Atualizar Tarefa" : "Adicionar"}
           </button>
      </div>


      {tarefas.map((item, index) => (
        <section key={item} className='stickers'>

          <div className='info'>
          <span>{item}</span>
          </div>

          <div className='actionButtons'>
          <button onClick={() => editar(item)}>Editar</button>
          <button onClick={() => excluir(item)}>Excluir</button>
          </div>

        </section>
      ))}

   </div>

)


}
