import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const ContainerTarefas = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const FormConteudo = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 0;
  border: 1px solid black;
`;

const Tarefa = styled.p`
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: .2s
`


function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <>
      <Main>
        <FormConteudo onSubmit={handleSubmit}>
          <h1>Digite uma tarefa...</h1>
          <Input 
            type="text" 
            placeholder="Digite alguma coisa" 
            value={input} 
            onChange={(e => setInput(e.target.value))}
          />
        </FormConteudo>
        <ContainerTarefas>
          {tarefas.map((tarefa, index) => {
            return <Tarefa key={index}>{tarefa}</Tarefa>
          })}
        </ContainerTarefas>
      </Main>
    </>
  );
}

export default App;
