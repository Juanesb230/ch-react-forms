import { useState } from "react"
import { INITIAL_VALUES } from "../../../../utils/constants/formContants"

const useValidateForm = () => {

  const [errorsForm, setErrorsForm] = useState(INITIAL_VALUES)
  const [isValid, setisValid] = useState(false)

  const validateInputs = (name: string, value: string) => {
    if (!value) {
      setErrorsForm(state => ({...state, [name]: `${name} is required`}))
      setisValid(false)
      return
    }
    if (name === 'username' && value.length < 5) {
      setErrorsForm(state => ({...state, [name]: `${name} has a min length of 5`}))
      setisValid(false)
      return
    }
    if (name === 'password' && value.length < 8) {
      setErrorsForm(state => ({...state, [name]: `${name} has a min length of 8`}))
      setisValid(false)
      return
    }

    setErrorsForm(state => ({...state, [name]: ''}))
    validateForm(name)
  }

  const validateForm = (name: string) => {
    if (Object.entries(errorsForm).filter(([key, _value]) => key !== name ).find(([_key, value]) => !!value)) setisValid(false)
    else setisValid(true)
  }

  const disabledValidation = (name: string) => {
    setErrorsForm(state => ({...state, [name]: ''}))
  }

  return {errorsForm, isValid , validateInputs, disabledValidation}
}

export default useValidateForm