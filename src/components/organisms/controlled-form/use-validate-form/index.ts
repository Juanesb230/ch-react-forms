import { useState } from "react"

const initialValues = { username: '', password: '' }

const useValidateForm = () => {

  const [errorsForm, seterrorsForm] = useState(initialValues)

  const validate = (name: string, value: string) => {
    if (!value) {
      seterrorsForm(state => ({...state, [name]: `${name} is required`}))
      return
    }
    if (name === 'username' && value.length < 5) {
      seterrorsForm(state => ({...state, [name]: `${name} has a min length of 5`}))
      return
    }
    if (name === 'password' && value.length < 8) {
      seterrorsForm(state => ({...state, [name]: `${name} has a min length of 8`}))
      return
    }
    seterrorsForm(state => ({...state, [name]: ''}))
  }

  return {errorsForm , validate}
}

export default useValidateForm