import styled from 'styled-components'
import PropTypes from 'prop-types'

import Avatar from './Avatar'
import UserName from './UserName'
import Subject from './Subject'
import PrivateMessage from './PrivateMessage'
import Picture from './Picture'

const Container = styled.section`
  min-height: 70px;
  border-radius: 5px;

  display: flex;
  gap: 10px;

  padding: 10px 5px;
`

const Alert = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const Notification = ({ info, user }) => {
  return (
    <Container className={!info.seen ? 'bg-light-grayish-blue-1' : ''}>
      <Avatar avatar={user.avatar} />
      <div>
        <UserName firstName={user.firstName} lastName={user.lastName} />
        <Subject typeNotification={info.type} messageNotification={info.message} />
          
        { !info.seen && <Alert className='bg-red ml-1' /> }

        <p className='fs-xsmall fw-normal grayish-blue mt-1'>{ info.timeAgo }</p>

        { info.type === 'private_message' && <PrivateMessage message={info.privateMessage} /> }
      </div>

      { info.picture && <Picture picture={info.picture} /> }
    </Container>
  )
}

Notification.propTypes = {
  info: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Notification