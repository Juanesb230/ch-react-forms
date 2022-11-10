import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { promiseMock } from '../../../utils/mocks/promiseMock'

import { Input } from '../../atoms/input'
import { Button } from '../../atoms/button'

const ControlledFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      selector: Yup.string(),
      username: Yup.string()
        .min(5, 'Must be 5 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true)
      await promiseMock()
      formik.setSubmitting(false)
      if (formik.isValid) alert(JSON.stringify(values, null, 2));
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valid } = e.target.validity
    if (valid) formik.handleChange(e)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Controlled Formik</h3>
      <section>
        <label htmlFor="username">
          Username
          <Input
            id="username"
            name="username"
            type="text"
            pattern="[A-Za-z0-9]*"
            maxLength={10}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
          />
        </label>
      </section>
      <section>
        <label htmlFor="password">
          Password
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
        </label>
      </section>
      <Button type="submit" disabled={!formik.isValid || formik.isSubmitting}>{formik.isSubmitting ? 'cargando...' : 'Send Form'}</Button>
    </form>
  )
}

export default ControlledFormik