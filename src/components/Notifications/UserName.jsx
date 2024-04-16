import PropTypes from 'prop-types'

const UserName = ({ firstName, lastName }) => {
  return (
    <h2 className='fs-small fw-bold inline mr-1'>
      { firstName } { lastName }
    </h2>
  )
}

UserName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default UserName