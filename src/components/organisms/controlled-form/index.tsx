import { useState } from "react"
import useValidateForm from "./use-validate-form"

const initialValues = { username: '', password: '' }

const ControlledForm = () => {

  const [formValues, setformValues] = useState(initialValues)
  const { errorsForm, validate } = useValidateForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformValues(state => ({...state, [name]: value}))
  }

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    validate(name, value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Your request is " + JSON.stringify(formValues))
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
          Username:
          <input type="text" name="username" onChange={handleChange} onBlur={onBlur} value={formValues.username} />
          {errorsForm.username && <p style={{fontSize: 12}}>{errorsForm.username}</p>}
      </label>
      <label>
          Password:
          <input type="password" name="password" onChange={handleChange} onBlur={onBlur} value={formValues.password} />
          {errorsForm.password && <p style={{fontSize: 12}}>{errorsForm.password}</p>}
      </label>
      <button type="submit">Enviar request</button>
    </form>
  )
}

export default ControlledForm