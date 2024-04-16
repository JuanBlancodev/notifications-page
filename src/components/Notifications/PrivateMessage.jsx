import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  border-radius: 5px;
  background-color: var(--color-very-light-grayish-blue);

  padding: 15px 10px;
  margin-top: 15px;
  justify-self: end;

  &:hover{
    background-color: var(--color-light-grayish-blue-1);
  }
`

const PrivateMessage = ({ message }) => {
  return (
    <Container>
      <p className='dark-grayish-blue fw-normal'>{ message }</p>
    </Container>
  )
}

PrivateMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default PrivateMessage