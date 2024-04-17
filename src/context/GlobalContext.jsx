import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import ErrorMessage from "../components/ErrorMessage";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [users, setUsers] = useState(undefined)
  const [notifications, setNotifications] = useState(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const { data } = await axios.get('db/users.json')

        if(!Array.isArray(data)){
          throw Error()
        }

        setUsers(data)
      }catch(error){
        setError('An unexpected error occurred while trying to get users.')
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const Notifications = async () => {
      try{
        const { data } = await axios.get('db/notifications.json')

        if(!Array.isArray(data)){
          throw Error()
        }

        setNotifications(data)
      }catch(error){
        setError('An unexpected error occurred while trying to get notifications.')
      }
    }

    Notifications()
  }, [])

  if(error !== null){
    return <ErrorMessage error={error} />
  }
  else if(users === undefined || notifications === undefined){
    return <Wrapper>
      <ReactLoading type="spin" color="#147af4" width="50px" height="50px" />
      <p className='fs-medium fw-normal grayish-blue'>Loading content, please wait</p>
    </Wrapper>
  }

  const markAllAsRead = () => {
    setNotifications(prevNotifications => (
      prevNotifications.map(notification => ({
        ...notification,
        seen: true
      }))
    ))
  }

  const markNotificationAsRead = (id) => {
    const notificationsUpdated = notifications.map(notification => {
      if(notification.id === id){
        return { ...notification, seen: true }
      }

      return notification
    })

    setNotifications(notificationsUpdated)
  }

  return (
    <GlobalContext.Provider value={{
      users,
      notifications,
      markAllAsRead,
      markNotificationAsRead
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }