import styled from "styled-components"
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
`

const Img = styled.img` 
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Picture = ({ picture }) => {
  return (
    <Container>
      <Img src={`picture/${picture}`} alt={picture} />
    </Container>
  )
}

Picture.propTypes = {
  picture: PropTypes.string.isRequired
}

export default Picture