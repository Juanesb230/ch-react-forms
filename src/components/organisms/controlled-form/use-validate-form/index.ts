import { useState, useEffect } from "react"
import { INITIAL_ERRORS } from "../../../../utils/constants/formContants"

const useValidateForm = () => {

  const [errorsForm, setErrorsForm] = useState(INITIAL_ERRORS)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if(Object.values(errorsForm).find(value => !!value)) setIsValid(false)
    else setIsValid(true)
  }, [errorsForm])

  const validateInputs = (name: string, value: string) => {
    if (!value) {
      setErrorsForm(state => ({...state, [name]: `${name} is required`}))
      return
    }
    if (name === 'username' && value.length < 5) {
      setErrorsForm(state => ({...state, [name]: `${name} has a min length of 5`}))
      return
    }
    if (name === 'password' && value.length < 8) {
      setErrorsForm(state => ({...state, [name]: `${name} has a min length of 8`}))
      return
    }

    setErrorsForm(state => ({...state, [name]: ''}))
  }

  return {errorsForm, isValid, validateInputs}
}

export default useValidateForm