import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const PriveteRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <NavLink to={redirectTo} /> : <Component />;
};

export default PriveteRoute;
