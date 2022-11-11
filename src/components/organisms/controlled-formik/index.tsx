import { useFormik } from 'formik'
import * as Yup from 'yup'
import { promiseMock } from '../../../utils/mocks/promiseMock'

import { Input } from '../../atoms/input'
import { Button } from '../../atoms/button'
import { INITIAL_VALUES } from '../../../utils/constants/formContants'

const ControlledFormik = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: Yup.object({
      selector: Yup.string(),
      username: Yup.string()
        .min(5, ({ min }) => `Must be ${min} characters or more`)
        .required('Required'),
      password: Yup.string()
        .min(8, ({ min }) => `Must be ${min} characters or more`)
        .required('Required'),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true)
      await promiseMock()
      formik.setSubmitting(false)
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            maxLength={10}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
        </label>
      </section>
      <Button type="submit" disabled={!formik.isValid}>{formik.isSubmitting ? 'cargando...' : 'Send Form'}</Button>
    </form>
  )
}

export default ControlledFormik