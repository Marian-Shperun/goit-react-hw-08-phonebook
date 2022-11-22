import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'baseline',
        margin: '15px 0 20px',
      }}
    >
      <NavLink to="/">
        <h1 style={{ margin: 0, backgroundColor: 'transparent' }}>Phonebook</h1>
      </NavLink>
    </nav>
  );
};

export default AppBar;
