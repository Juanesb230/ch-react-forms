import NotControlledForm from './components/organisms/not-controlled-form'
import ControlledForm from './components/organisms/controlled-form'
import ControlledFormik from './components/organisms/controlled-formik';

function App() {
  return (
    <>
      <NotControlledForm />
      <ControlledForm />
      <ControlledFormik />
    </>
  );
}

export default App;
