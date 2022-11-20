import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addContact } from 'globalState/contacts/operations';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { LocalPhoneIcon, PersonIcon } from '../IconsApp';

const FormContact = ({ contacts }) => {
  const navigate = useNavigate();
  const [valuesOfInput, setValuesOfInput] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const idName = nanoid();
  const idNumber = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    setValuesOfInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkNameContacts = enteredName => {
    return contacts?.find(
      contact => contact?.name.toLowerCase() === enteredName.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      ...valuesOfInput,
    };
    if (!checkNameContacts(newContact.name)) {
      dispatch(addContact(newContact));
      e.target.reset();
      navigate('/');
      return true;
    } else {
      alert(`${newContact.name} is already in contact`);
      return false;
    }
  };

  return (
    <>
      <h2>Add a new contact</h2>
      <form
        style={{ padding: '20px', border: '1px solid rgb(2, 2, 2)' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor={idName}>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={idName}
            onChange={handleChange}
          />
          <span style={{ position: 'relative', top: '-26px', left: '5px' }}>
            <PersonIcon sx={{ mr: 1, fontSize: 18 }} />
          </span>
        </label>
        <label htmlFor={idNumber}>
          Number
          <br />
          <input
            type="tel"
            name="number"
            id={idNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            defaultValue="+"
            onChange={handleChange}
            required
          />
          <span style={{ position: 'relative', top: '-26px', left: '5px' }}>
            <LocalPhoneIcon sx={{ mr: 1, fontSize: 18 }} />
          </span>
        </label>
        <button type="submit">Add const</button>
      </form>
    </>
  );
};
export default FormContact;
FormContact.propTypes = {
  contacts: PropTypes.array,
};
