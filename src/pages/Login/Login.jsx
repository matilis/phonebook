import { LoginForm } from 'components';
import { Helmet } from 'react-helmet';

const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </div>
);
export default Login;
