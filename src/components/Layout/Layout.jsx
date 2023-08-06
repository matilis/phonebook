import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <div className={css.book}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
