import { createContext } from "react";
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{

    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }