import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.appbar__wrapper + css.container}>
      <div className={css.appbar__item}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
