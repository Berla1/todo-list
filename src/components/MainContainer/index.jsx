import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;
const MainContainer = ({ children }) => {
    return(
        <Main>
            {children}
        </Main>
    )
}

export default MainContainer