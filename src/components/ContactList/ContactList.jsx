import { useDispatch } from 'react-redux';
import { removeContact } from 'globalState/slices/constatsSlice';

const ContactList = ({ visibleList }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {visibleList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <a href={`tel:${number}`}>
              {name}: <span>{number}</span>
            </a>
            <button key={id} onClick={() => dispatch(removeContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
