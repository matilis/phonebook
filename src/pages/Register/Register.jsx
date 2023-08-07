import { RegisterForm } from 'components';
import { Helmet } from 'react-helmet';
import css from './Register.module.css';

const Register = () => (
  <div>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <div className={css.homePage}>
      <h1 className={css.homePage__title}>Phonebook</h1>
    </div>
    <RegisterForm />
  </div>
);
export default Register;
