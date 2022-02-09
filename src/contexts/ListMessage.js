import { useState, createContext } from 'react'

const ListMessageContext = createContext({})

const ListMessageContextProvider = ({ children }) => {
  
  const [ message, setMessage ] = useState(null)

  const getMessage = async () => {
    const response = await fetch(`http://localhost:5000/messages`, {
      credentials: 'include'
    })

    const data = await response.json()

    setMessage(data)
  }

  const value = {
    message,
    getMessage
  }

  return (
    <ListMessageContext.Provider value={value}>
      {children}
    </ListMessageContext.Provider>
  )
}

export {
  ListMessageContext,
  ListMessageContextProvider
}