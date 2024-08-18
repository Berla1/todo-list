import { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

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
  margin-top: 1.5rem;
`;

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
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const novaTarefa = { input: input, id: Date.now().toString()};
    setTarefas((prevTarefa) => [...prevTarefa, novaTarefa]);
    setInput("");
  }

  function deleteTask(id) {
    return setTarefas((prevTarefas) => prevTarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <>
      <Main>
        <FormConteudo onSubmit={handleSubmit}>
          <h1>Digite uma tarefa...</h1>
          <Input
            type="text"
            placeholder="Digite sua tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormConteudo>
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
      </Main>
    </>
  );
}

export default App;
