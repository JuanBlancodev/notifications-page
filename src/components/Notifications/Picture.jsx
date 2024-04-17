import styled from "styled-components"
import PropTypes from 'prop-types'

const Container = styled.div`
  min-width: 50px;
  width: 50px;
  
  min-height: 50px;
  height: 50px;

  border-radius: 10px;
  overflow: hidden;
`

const Img = styled.img` 
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Picture = ({ picture, handleLoaded }) => {
  return (
    <Container>
      <Img src={`picture/${picture}`} alt={picture} onLoad={handleLoaded} />
    </Container>
  )
}

Picture.propTypes = {
  picture: PropTypes.string.isRequired,
  handleLoaded: PropTypes.func.isRequired
}

export default Picture