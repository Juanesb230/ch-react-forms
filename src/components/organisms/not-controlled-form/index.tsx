import { useRef, useEffect, useCallback } from "react"
import React from "react";

const NotControlledForm = () => {

  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const changeUsernameInput = useCallback(
    () => {
      if (usernameInput.current?.value === '') alert('Username no empty')
    },
    [usernameInput],
  )

  const changePasswordInput = useCallback(
    () => {
      if (passwordInput.current?.value === '') alert('Username no empty')
      if ((passwordInput.current?.value.length || -1) < 8) alert('Password has min length of 8')
    },
    [passwordInput],
  )

  useEffect(() => {
    usernameInput.current?.addEventListener('input', changeUsernameInput)
    passwordInput.current?.addEventListener('input', changePasswordInput)
  
    return () => {
      usernameInput.current?.removeEventListener('input', changeUsernameInput)
      passwordInput.current?.removeEventListener('input', changePasswordInput)
    }
  }, [changePasswordInput, changeUsernameInput, usernameInput, passwordInput])
  
  
  const validation = (e: any) => {
    if (e.username === '') return false
    if (e.password === '') return false
    if (e.password.length < 8) return false
    return true
  }
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const request = {
      username: usernameInput.current?.value,
      password: passwordInput.current?.value
    }
    const isValid = validation(request) ? 'isValid' : 'notValid'
    alert("Your request is " + JSON.stringify(request) + ' and ' + isValid )
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
          Username:
          <input type="text" ref={usernameInput} />
      </label>
      <label>
          Password:
          <input type="password" ref={passwordInput} />
      </label>
      <button type="submit">Enviar request</button>
    </form>
  )

}

export default NotControlledForm
