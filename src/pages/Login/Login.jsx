import { LoginForm } from 'components';
import { Helmet } from 'react-helmet';
import css from './Login.module.css';

const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className={css.homePage}>
      <h1 className={css.homePage__title}>Phonebook</h1>
    </div>
    <LoginForm />
  </div>
);
export default Login;
