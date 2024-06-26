import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'
import useGlobalContext from '../hooks/useGlobalContext'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 5px;
`

const PendingCounter = styled.span`
  padding: 5px 15px;
  border-radius: 10px;
`

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  ${props => !props.disabled && css `
    &:hover{
      color: var(--color-blue);
    }
  `}
`

const Header = () => {
  const { notifications, markAllAsRead } = useGlobalContext()
  const [pendingNotifications, setPendingNotifications] = useState(0)

  useEffect(() => {
    const count = notifications.filter(item => !item.seen).length
    setPendingNotifications(count)
  }, [notifications])

  return (
    <HeaderContainer>
      <Title className='color-very-dark-blue fs-medium'>
        Notifications
        { pendingNotifications > 0 && 
          <PendingCounter className='white bg-blue fs-small'>
            { pendingNotifications }
          </PendingCounter>
        }
      </Title>

      <Button 
        className='fs-small fw-normal dark-grayish-blue'
        onClick={() => markAllAsRead()}
        disabled={pendingNotifications === 0}>
        Mark all as read
      </Button>
    </HeaderContainer>
  )
}

export default Header