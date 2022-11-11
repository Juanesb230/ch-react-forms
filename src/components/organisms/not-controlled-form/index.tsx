import React, { useRef } from "react"
import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"

const NotControlledForm = () => {

  const usernameInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

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
          <Input type="text" name="username" inputRef={usernameInput} />
        </label>
      </section>
      <section>
        <label>
          Password:
          <Input type="password" name="password" inputRef={passwordInput} />
        </label>
      </section>
      <section>
        <Button type="submit">Send Form</Button>
      </section>
    </form>
  )

}

export default NotControlledForm
