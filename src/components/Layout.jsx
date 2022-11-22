import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';

import AppBar from './AppBar/AppBar';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div
          className="inner"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            position: 'relative',
          }}
        >
          <AppBar />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main>
        <div className="inner">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
