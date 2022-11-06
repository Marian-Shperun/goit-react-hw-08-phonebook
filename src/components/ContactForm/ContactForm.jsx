import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'globalState/slices/constatsSlice';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactForm = ({ contacts }) => {
  const [valuesOfInput, setValuesOfInput] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const idName = nanoid();
  const idNumber = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    setValuesOfInput(prevState => ({ ...prevState, [name]: value }));
  };

  const checkNameContacts = enteredName => {
    return contacts.find(
      contact => contact.name.toLowerCase() === enteredName.toLowerCase()
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
      return true;
    } else {
      alert(`${newContact.name} is already in contact`);
      return false;
    }
  };
  // const dataForm = {
  //   name: veluesOfInput.name,
  //   number: veluesOfInput.number,
  // };

  // const submitForm = e => {
  //   e.preventDefault();
  //   if (onSubmit(dataForm)) {
  //     e.target.reset();
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
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
      </label>
      <button type="submit">Add const</button>
    </form>
  );
};
export default ContactForm;
ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};
