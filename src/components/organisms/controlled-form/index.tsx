import React, { useState } from "react"
import useValidateForm from "./use-validate-form"
import { INITIAL_VALUES, INITIAL_TOUCHED } from "../../../utils/constants/formContants"

import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"

const ControlledForm = () => {

  const [formValues, setformValues] = useState(INITIAL_VALUES)
  const [touched, setTouched ] = useState(INITIAL_TOUCHED)
  const { errorsForm, isValid, validateInputs } = useValidateForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformValues(state => ({ ...state, [name]: value }))
    validateInputs(name, value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Your request is " + JSON.stringify(formValues))
  }

  const hasTouched = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched(state => ({...state, [name]: true}))
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
            value={formValues.username}
            error={touched.username && errorsForm.username}
            pattern="[a-z0-9]*"
            onBlur={hasTouched}
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
            value={formValues.password}
            error={touched.password && errorsForm.password}
            pattern="[0-9]*"
            onBlur={hasTouched}
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