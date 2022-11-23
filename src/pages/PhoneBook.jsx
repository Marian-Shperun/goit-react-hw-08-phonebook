import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilterStatus } from 'globalState/contacts/selectors';
import { fetchContacts } from 'globalState/contacts/operations';

import { useAuth } from 'hooks';

import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { TextSkeleton } from 'components/Skeleton';

import { PersonAddIcon } from 'components/IconsApp';
import {
  TextWelcome,
  Sticky,
  BtnAddsContact,
  TotalCounts,
} from './Pages.styled';

const PhoneBook = ({ contacts, isLoading, error, scroll }) => {
  const { isLoggedIn, user } = useAuth();
  const filter = useSelector(selectFilterStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const filteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact?.name?.toLowerCase()?.includes(normilizeFilter)
    );
  };
  return (
    <>
      {!isLoggedIn ? (
        <TextWelcome style={{ textAlign: 'center', color: 'white' }}>
          Welcome you in the phonebook, for your contacts!
        </TextWelcome>
      ) : (
        <>
          {contacts.length === 0 ? (
            <>
              <h2>Contacts</h2>
              {isLoading ? (
                <TextSkeleton />
              ) : (
                <>
                  {error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                  ) : (
                    <p>
                      Hello {user.name}. Contact list is empty to add contact
                      Pressing on the button at the bottom
                    </p>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {/* <Sticky scroll={scroll}>
                <h2>Contacts</h2>
                <Filter contacts={filteredContacts} scroll={scroll} />
              </Sticky> */}
              <>
                <h2 style={{ marginTop: 0 }}>Contacts</h2>
                <Filter contacts={filteredContacts} scroll={scroll} />
              </>
              <ContactList
                isLoading={isLoading}
                visibleList={filter !== '' ? filteredContacts() : contacts}
              />
              {contacts.length > 0 && (
                <TotalCounts>{contacts.length} Contacts recorded</TotalCounts>
              )}
            </>
          )}
          <BtnAddsContact to="/new-contact" title="add new contact">
            <span>
              <PersonAddIcon />
            </span>
            <span className="btn-text">Add new contact</span>
          </BtnAddsContact>
        </>
      )}
    </>
  );
};

export default PhoneBook;
