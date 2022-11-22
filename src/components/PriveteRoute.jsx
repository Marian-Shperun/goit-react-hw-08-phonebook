import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PriveteRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PriveteRoute;
