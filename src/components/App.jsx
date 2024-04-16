import styled from 'styled-components'
import Header from './Header'
import Notifications from './Notifications'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding: 25px 15px;

  display: grid;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const App = () => {
  return (
    <Wrapper className='bg-white'>
      <Content>
        <Header />
        <Notifications />
      </Content>
    </Wrapper>
  )
}

export default App