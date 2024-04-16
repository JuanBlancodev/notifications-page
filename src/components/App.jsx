import styled from 'styled-components'
import Header from './Header'
import ContainerNotifications from './Notifications/ContainerNotifications'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 25px 15px;

  display: grid;

  @media (width >= 720px){
    width: 650px;
    margin: 50px auto;
    border-radius: 10px;
  }
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
        <ContainerNotifications />
      </Content>
    </Wrapper>
  )
}

export default App