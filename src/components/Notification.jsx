import styled from 'styled-components'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const Container = styled.section`
  min-height: 70px;
  border-radius: 5px;

  display: grid;
  column-gap: 10px;
  grid-template-columns: repeat(12, 1fr);

  padding: 10px 5px;
`

const Content = styled.div`
  grid-column: 3 / -1;
`

const Alert = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const Div = styled.div` 
display: flex;
`

const Notification = ({ info, user }) => {
  const typeMessage = [
    { type: 'reaction', text: 'reacted to your recent post' },
    { type: 'follower', text: 'followed you' },
    { type: 'join_group', text: 'has joined your group' },
    { type:' private_message', text: 'sent you a private message' },
    { type: 'comment_on_picture', text: 'commented on your picture' },
    { type: 'left_group', text: 'left the group' }
  ]

  return (
    <Container className={`${!info.seen ? 'bg-light-grayish-blue-1' : ''}`}>
      <Avatar avatar={user.avatar} />
      <Content>
        {/* <h2 className='fs-small fw-bold'>
          <span>{user.firstName} {user.lastName}</span>
          <span className='dark-grayish-blue fw-normal'>
            { typeMessage.find(message => message.type === info.type)?.text }
          </span>
          { info.message && <span className={'fw-semibold'}>{ info.message }</span> }

          { !info.seen && <Alert className='bg-red ms-1' /> }
        </h2> */}
        <Div>
          <h2>ASD</h2>
          <p>asd</p>
        </Div>
        <span className='fs-xsmall fw-normal grayish-blue'>{ info.timeAgo }</span>
      </Content>
    </Container>
  )
}

Notification.propTypes = {
  info: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Notification