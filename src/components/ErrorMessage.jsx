import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div` 
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 20px;
  gap: 20px;
`

const Message = styled.p`
  text-align: center;
  padding: 20px 10px;
  border-radius: 5px;
`

const Button = styled.button`
  width: 200px;
  height: 50px;

  border: none;
  border-radius: 10px;
  background-color: #147af4;

  margin: 0 auto;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`

const ErrorMessage = ({ error }) => {
  return (
    <Container>
      <Message className='bg-very-light-grayish-blue fw-normal fs-medium'>{ error }</Message>
      <Button className='btn white fw-semibold fs-small' 
        onClick={() => window.location.reload()}>
        Reload page
      </Button>
    </Container>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
}

export default ErrorMessage