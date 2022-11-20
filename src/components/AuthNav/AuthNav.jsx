import { useNavigate } from 'react-router-dom';

const AuthNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={e => {
          navigate('login');
          // e.target.disabled = true;
        }}
      >
        Log In
      </button>
    </>
  );
};

export default AuthNav;
