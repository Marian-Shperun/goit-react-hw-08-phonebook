import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'globalState/auth/operations';

import { LogoutIcon, ExpandMoreIcon, ExpandLessIcon } from '../IconsApp';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toggle = () => {
    setVisible(!visible);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <>
      <button className={css['name-user']} type="button" onClick={toggle}>
        {user.name}
        {visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>
      {visible && (
        <div className={css['dropdown-menu']}>
          <p className={css['dropdown-menu__email']}>{user.email}</p>

          <span className={css['botton-exit']} onClick={handleLogOut}>
            Logout
            <LogoutIcon sx={{ ml: 1, fontSize: 18 }} />
          </span>
        </div>
      )}
    </>
  );
};

export default UserMenu;
