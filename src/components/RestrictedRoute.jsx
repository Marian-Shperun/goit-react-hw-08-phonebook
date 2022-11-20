import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <NavLink to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
