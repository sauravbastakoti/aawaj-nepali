import React, { createContext, useCallback, useContext, useState } from 'react'
import NotificationContainer from './Notification'

const NotificationContext = createContext(null)

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  const showNotification = useCallback(({ type = 'info', title = '', message = '', duration = 4000 } = {}) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    const payload = { id, type, title, message, duration }
    setNotifications((s) => [...s, payload])
    return id
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications((s) => s.filter((n) => n.id !== id))
  }, [])

  return (
    <NotificationContext.Provider value={{ showNotification, removeNotification }}>
      {children}
      <NotificationContainer notifications={notifications} onClose={removeNotification} />
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const ctx = useContext(NotificationContext)
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider')
  return ctx
}

export default NotificationProvider
