import { useState } from "react";
import styled from "styled-components";

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

const FormTarefas = ({ onAddTarefa, children }) => {
    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        onAddTarefa(input)
        setInput('')
    }

    return (
        <FormConteudo onSubmit={handleSubmit}>
            {children}
            <Input
                type="text"
                placeholder="Digite sua tarefa..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </FormConteudo>
    )
}

export default FormTarefas