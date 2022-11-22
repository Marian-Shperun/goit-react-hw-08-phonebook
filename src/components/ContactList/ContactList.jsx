import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/contacts/operations';

import { ContsctSkeleton } from '../Skeleton';
import { AccountCircleIcon } from '../IconsApp';
import css from './ContactList.module.css';

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
            <div className={css['contacts-list__item']}>
              <span style={{ fontSize: '30px' }}>
                <AccountCircleIcon sx={{ mr: 1, fontSize: 60 }} size="large" />
              </span>
              <p style={{ width: '90px', marginRight: 'auto' }}>{name}:</p>
              <a
                href={`tel:${number}`}
                className={css['contacts-list__number']}
              >
                {number}
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
