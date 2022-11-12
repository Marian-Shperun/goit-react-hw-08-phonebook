import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/operations';
import { ContsctSkeleton } from '../Skeleton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
console.log(AccountCircleIcon);
const ContactList = ({ visibleList, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {visibleList.map(({ id, name, number }) =>
        isLoading ? (
          <div key={id}>
            <ContsctSkeleton />
          </div>
        ) : (
          <li key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '30px' }}>
                <AccountCircleIcon sx={{ mr: 1, fontSize: 60 }} size="large" />
              </span>
              <a href={`tel:${number}`}>
                {name}: <span style={{ marginLeft: '10px' }}>{number}</span>
              </a>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        )
      )}
    </ul>
  );
};
export default ContactList;
