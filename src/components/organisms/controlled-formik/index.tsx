import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ControlledFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      selector: 'phone'
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
      await new Promise((resolve) => setTimeout(() => {resolve({})}, 3000))
      formik.setSubmitting(false)
      if (formik.isValid) alert(JSON.stringify(values, null, 2));
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {valid} = e.target.validity
    if (valid) formik.handleChange(e)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        pattern="[A-Za-z0-9]*"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit" disabled={!formik.isValid}>{formik.isSubmitting ? 'cargando...' : 'Enviar request'}</button>
    </form>
  )
}

export default ControlledFormik