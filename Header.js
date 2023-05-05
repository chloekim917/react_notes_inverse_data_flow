import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

function Header({ user, setUser }) {
  
  
  function handleLoginClick() {
    setUser({
      id: 1,
      username: "Ian"
    })
  }
  
  function handleLogoutClick() {
    setUser(null)
  }
  
  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </nav>
    </header>
  )
}

export default Header