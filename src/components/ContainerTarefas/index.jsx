import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1.5rem;
`;

const ContainerTarefas = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default ContainerTarefas