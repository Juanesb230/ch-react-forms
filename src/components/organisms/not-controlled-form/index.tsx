import { useRef, useEffect, useCallback } from "react"
import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"

const NotControlledForm = () => {

  const usernameInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  const handleChangeUsername = useCallback(() => {
    if (!usernameInput.current?.value) {
      usernameInput.current?.setCustomValidity('The field username is required')
      usernameInput.current?.reportValidity()
      return
    }
    if (usernameInput.current.value.length < 5) {
      usernameInput.current?.setCustomValidity('The field username has min len of 5')
      usernameInput.current?.reportValidity()
      return
    }
    usernameInput.current.setCustomValidity('')
  }, [])

  useEffect(() => {
    const usernameInputCurrent = usernameInput.current
    usernameInputCurrent?.addEventListener('input', handleChangeUsername)
  
    return () => {
      usernameInputCurrent?.removeEventListener('input', handleChangeUsername)
    }
  }, [handleChangeUsername])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const request = {
      username: usernameInput.current?.value,
      password: passwordInput.current?.value
    }
    alert("Your request is " + JSON.stringify(request))
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Not Controlled Form</h3>
      <section>
        <label>
          Username:
          <Input type="text" inputRef={usernameInput} />
        </label>
      </section>
      <section>
        <label>
          Password:
          <Input type="password" inputRef={passwordInput} />
        </label>
      </section>
      <section>
        <Button type="submit">Send Form</Button>
      </section>
    </form>
  )

}

export default NotControlledForm
