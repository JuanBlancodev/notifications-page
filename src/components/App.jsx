import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding: 25px 15px;
`

const Content = styled.div`
  height: 100%;
`

const App = () => {
  return (
    <Wrapper className='bg-white'>
      <Content>

      </Content>
    </Wrapper>
  )
}

export default App