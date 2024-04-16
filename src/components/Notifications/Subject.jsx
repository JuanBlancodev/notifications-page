import PropTypes from 'prop-types'

const Subject = ({ typeNotification, messageNotification }) => {
  const typeMessage = [
    { type: 'reaction', text: 'reacted to your recent post' },
    { type: 'follower', text: 'followed you' },
    { type: 'join_group', text: 'has joined your group' },
    { type: 'private_message', text: 'sent you a private message' },
    { type: 'comment_on_picture', text: 'commented on your picture' },
    { type: 'left_group', text: 'left the group' }
  ]

  return (
    <p className='dark-grayish-blue fw-normal inline'>
      { typeMessage.find(message => message.type === typeNotification)?.text }
      { messageNotification && (
        <span className={`info fw-bold ml-1 ${typeNotification.includes('group') ? 'blue' : ''}`}>
          { messageNotification }
        </span>
      ) }
    </p>
  )
}

Subject.propTypes = {
  typeNotification: PropTypes.string.isRequired,
  messageNotification: PropTypes.string
}

export default Subject