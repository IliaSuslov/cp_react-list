import Table from "./pages/Table"
import Pagination from './components/Pagination'
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Table />
      <Pagination />
     
    </Container>

  )
}

export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;