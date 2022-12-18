import styled from "styled-components"

import { Board } from "./Board"

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function App() {
  return (
    <AppWrapper className="App" style={{ display: 'flex' }}>
      <Board />
    </AppWrapper>
  )
}

export default App
