import styled from "styled-components"
import PropTypes from 'prop-types'
import { PATH_PICTURE } from "../../config/cfg"

const Container = styled.div`
  width: 60px;
  height: 40px;
  overflow: hiddden;
`

const Img = styled.img` 
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Picture = ({ picture }) => {
  return (
    <Container>
      <Img src={PATH_PICTURE + picture} alt={picture} />
    </Container>
  )
}

Picture.propTypes = {
  picture: PropTypes.string.isRequired
}

export default Picture