import { useState, useEffect, useCallback } from "react"
import { INITIAL_VALUES } from "../../../../utils/constants/formContants"

const useValidateForm = () => {

  const [errorsForm, setErrorsForm] = useState(INITIAL_VALUES)
  const [isValid, setisValid] = useState(false)

  const validateForm = useCallback(() => {
    if (Object.values(errorsForm).find(value => !!value)) setisValid(false)
    else setisValid(true)
  }, [errorsForm])

  useEffect(() => {
    validateForm()
  }, [validateForm])
  

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

  const disabledValidation = (name: string) => {
    setErrorsForm(state => ({...state, [name]: ''}))
  }

  return {errorsForm, isValid, validateInputs, disabledValidation}
}

export default useValidateForm