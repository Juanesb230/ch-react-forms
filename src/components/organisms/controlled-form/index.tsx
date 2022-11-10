import { useState } from "react"
import useValidateForm from "./use-validate-form"
import { INITIAL_VALUES } from "../../../utils/constants/formContants"

import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"

const ControlledForm = () => {

  const [formValues, setformValues] = useState(INITIAL_VALUES)
  const { errorsForm, isValid, validateInputs, disabledValidation } = useValidateForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformValues(state => ({ ...state, [name]: value }))
    //validateInputs(name, value)
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    validateInputs(name, value)
  }

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    disabledValidation(name)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Your request is " + JSON.stringify(formValues))
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Controlled Form</h3>
      <section>
        <label>
          Username:
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={formValues.username}
            error={!isValid && errorsForm.username}
          />
        </label>
      </section>
      <section>
        <label>
          Password:
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={formValues.password}
            error={!isValid && errorsForm.password}
          />
        </label>
      </section>
      <section>
        <Button type="submit" disabled={!isValid}>Send Form</Button>
      </section>
    </form>
  )
}

export default ControlledForm