import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import loginSvg from 'images/icon-login.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.usermenu__wrapper}>
      <p className={css.usermenu__text}>
        Welcome <span className={css.usermenu__name}>{user.name}</span>
      </p>
      <button
        className={css.usermenu__btnLogin}
        type="button"
        onClick={handleLogout}
      >
        <img
          className={css.nav__iconLogin}
          src={loginSvg}
          alt="login icon face"
        />
      </button>
      <button
        className={css.usermenu__btn}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
