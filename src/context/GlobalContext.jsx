import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

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
    return <h1>{ error }</h1>
  }
  else if(users === undefined || notifications === undefined){
    return null
  }

  const markAsRead = () => {
    setNotifications(prevNotifications => (
      prevNotifications.map(notification => ({
        ...notification,
        seen: true
      }))
    ))
  }

  return (
    <GlobalContext.Provider value={{
      users,
      notifications,
      markAsRead
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }