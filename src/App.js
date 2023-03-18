import './App.css';
import styled from 'styled-components';
import Router from './shared/Router';

function App() {
  return (
    <Wrap>
      <Container>
        <Router />
      </Container>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #C2DEFF;
  display: flex;
`;

const Container = styled.div`
  width: 375px;
  height: 767px;
  background-color: #F5F5F5;
  margin : auto;
`;
