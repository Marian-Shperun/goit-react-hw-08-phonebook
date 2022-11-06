import { useSelector } from 'react-redux';
import { getContacts } from '../globalState/slices/constatsSlice';
import { getFilterStatus } from '../globalState/slices/filterSlice';

import ContactForm from './ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList';

export const App = () => {
  const contacts = Object.values(useSelector(getContacts));
  const filter = useSelector(getFilterStatus);

  const filteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact?.name?.toLowerCase()?.includes(normilizeFilter)
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />

      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts added</p>
      ) : (
        <>
          <Filter title="Find contacts by name" contacts={filteredContacts} />
          <ContactList
            visibleList={filter !== '' ? filteredContacts() : contacts}
          />
        </>
      )}
    </div>
  );
};
