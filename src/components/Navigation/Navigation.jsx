import css from './Navigation.module.css';
import homeSvg from 'images/icon-home.png';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { activeStyle } from 'styles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        style={({ isActive }) => activeStyle(isActive)}
        className={css.nav__link}
        to="/"
      >
        <img className={css.nav__icon} src={homeSvg} alt="home icon hause" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          style={({ isActive }) => activeStyle(isActive)}
          className={css.nav__link}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
