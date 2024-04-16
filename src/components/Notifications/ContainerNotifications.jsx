import styled from 'styled-components'
import Notification from './Notification'
import useGlobalContext from '../../hooks/useGlobalContext'

const Wrapper = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ContainerNotifications = () => {
  const { notifications, users } = useGlobalContext()

  return (
    <Wrapper>
      { notifications.map((notification, index) => (
        <Notification 
          info={notification} 
          user={users.filter(user => user.id === notification.userId)[0]} 
          key={index} 
        />
      )) }
    </Wrapper>
  )
}

export default ContainerNotifications