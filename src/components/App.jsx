import { useEffect, lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'globalState/contacts/selectors';
import { refreshUser } from 'globalState/auth/operations';

import { Layout } from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PriveteRoute from './PriveteRoute';
import phone from '../images/phone.jpg';
import { ImgFon } from 'pages/Pages.styled';

const PhoneBook = lazy(() => import('pages/PhoneBook'));
const FormContact = lazy(() => import('components/FormContact'));
const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));

export const App = () => {
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const { isLoggedIn, isRefreshing, errorAuth } = useAuth();

  const [scroll, setScroll] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (errorAuth === 'Network Error') {
    return alert(errorAuth);
  }
  return (
    <>
      <ImgFon
        isLoggedIn={isLoggedIn}
        src={phone}
        alt="black phone and Notepad with a handle"
      />

      {!isRefreshing && (
        <div
          className="container"
          onScroll={e => {
            setScroll(e.currentTarget.scrollTop);
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PhoneBook
                    contacts={contacts}
                    isLoading={isLoading}
                    error={error}
                    scroll={scroll}
                  />
                }
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={SignIn} redirectTo="/" />}
              />
              <Route
                path="/register"
                element={<RestrictedRoute component={SignUp} redirectTo="/" />}
              />
              <Route
                path="/new-contact"
                element={
                  <PriveteRoute
                    component={<FormContact contacts={contacts} />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="*"
                element={
                  <p style={{ color: 'red' }}>The page is not found: 404!</p>
                }
              />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};
