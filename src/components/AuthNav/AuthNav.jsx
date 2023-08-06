import { NavLink } from 'react-router-dom';
import { activeStyle } from 'styles';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink
        style={({ isActive }) => activeStyle(isActive)}
        className={css.nav__link}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        style={({ isActive }) => activeStyle(isActive)}
        className={css.nav__link}
        to="/login"
      >
        Log in
      </NavLink>
    </div>
  );
};
