import { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import MainContainer from "./components/MainContainer";
import ContainerTarefas from "./components/ContainerTarefas";
import FormTarefas from "./components/FormTarefas";

const FormConteudo = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 0;
  outline: none;
`;

const Tarefa = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s;
  &:hover {
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

function App() {
  const [tarefas, setTarefas] = useState([]);

  function addTarefa(input) {
    const novaTarefa = { input: input, id: Date.now().toString()};
    setTarefas((prevTarefa) => [...prevTarefa, novaTarefa]);
  }

  function deleteTask(id) {
    return setTarefas((prevTarefas) => prevTarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <>
      <MainContainer>
        <FormTarefas onAddTarefa={addTarefa}>
          <h1>Digite uma tarefa!</h1>
        </FormTarefas>
        <ContainerTarefas>
          {tarefas.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                {tarefa.input}
                <FaTrashAlt color="red" size={19} onClick={() => deleteTask(tarefa.id)} />
              </Tarefa>
            );

          })}
        </ContainerTarefas>
      </MainContainer>
    </>
  );
}

export default App;
