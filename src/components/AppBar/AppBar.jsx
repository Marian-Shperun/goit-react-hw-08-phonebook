import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          margin: '15px 0 25px',
        }}
      >
        <NavLink to="/">
          <h1 style={{ margin: 0, backgroundColor: 'transparent' }}>
            Phonebook
          </h1>
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};

export default AppBar;
