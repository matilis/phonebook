import css from './Navigation.module.css';
import homeSvg from 'images/icon-home.png';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { activeStyle } from 'styles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const handleNavLinkClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(200);
    }
  };

  return (
    <nav className={css.nav}>
      <NavLink
        onClick={handleNavLinkClick}
        style={({ isActive }) => activeStyle(isActive)}
        className={css.nav__link}
        to="/"
      >
        <img className={css.nav__icon} src={homeSvg} alt="home icon hause" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          onClick={handleNavLinkClick}
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
