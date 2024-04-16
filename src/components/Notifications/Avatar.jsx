import styled from 'styled-components'
import PropTypes from 'prop-types'

const AvatarContainer = styled.div`
  min-width: 40px;
  max-width: 40px;

  min-width: 40px;
  max-height: 40px;

  overfloy: hidden;

  grid-column: 1 / 3;
  justify-self: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Avatar = ({ avatar }) => {
  return (
    <AvatarContainer>
      <Img src={`avatar/${avatar}`} alt={avatar} />
    </AvatarContainer>
  )
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default Avatar