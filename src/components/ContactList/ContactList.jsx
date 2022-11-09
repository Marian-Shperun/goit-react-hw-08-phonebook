import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/operations';

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
            <button key={id} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
