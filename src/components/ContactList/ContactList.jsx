import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/operations';
import { ContsctSkeleton } from '../Skeleton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
console.log(AccountCircleIcon);
const ContactList = ({ visibleList, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <ul className="contactsList">
      {visibleList.map(({ id, name, number }) =>
        isLoading ? (
          <div key={id}>
            <ContsctSkeleton />
          </div>
        ) : (
          <li key={id}>
            <a
              href={`tel:${number}`}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '10px',
              }}
            >
              <span style={{ fontSize: '30px' }}>
                <AccountCircleIcon sx={{ mr: 1, fontSize: 60 }} size="large" />
              </span>
              <p style={{ maxWidth: '80px' }}>{name}:</p>
              <span style={{ marginLeft: '10px' }}>{number}</span>
            </a>
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
