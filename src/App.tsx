import styled from 'styled-components';
import { GlobalStyle } from '../public/style/GlobalStyles';
import { MainLayout } from './components/MainLayout';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <RootWrapper>
      <GlobalStyle />
      <MainLayout />
    </RootWrapper>
  );
}

export default App;
