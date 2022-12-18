import styled from "styled-components"

import { Board } from "./Board"
import { useChess } from "./hooks/useChess"
import Login from "./Login"

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function App() {
  const {name, setName} = useChess();

  return (
    <AppWrapper className="App" style={{ display: 'flex' }}>
      { name !== '' ?  <Board /> : Login}
    </AppWrapper>
  )
}

export default App
