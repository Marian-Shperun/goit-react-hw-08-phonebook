import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/operations';
import { ContsctSkeleton } from '../Skeleton';

const ContactList = ({ visibleList, isLoading }) => {
  const dispatch = useDispatch();

  // if (isLoading) {
  //   return <ContsctSceleton />;
  // }
  return (
    <ul>
      {visibleList.map(({ id, name, number }) => {
        return isLoading ? (
          <ContsctSkeleton />
        ) : (
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
