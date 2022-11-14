import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/operations';
import { ContsctSkeleton } from '../Skeleton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
console.log(AccountCircleIcon);
const ContactList = ({ visibleList, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <ul
      className='contactsList'
    >
      {visibleList.map(({ id, name, number }) =>
        isLoading ? (
          <div key={id}>
            <ContsctSkeleton />
          </div>
        ) : (
          <li key={id}>
            <div
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
              <a href={`tel:${number}`} style={{maxWidth: '80px'}}>{name}:</a>
              <span style={{ marginLeft: '10px' }}>{number}</span>
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
