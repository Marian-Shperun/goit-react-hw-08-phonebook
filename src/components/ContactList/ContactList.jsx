import { useDispatch } from 'react-redux';
import { deleteContact } from 'globalState/contacts/operations';

import { ContsctSkeleton } from '../Skeleton';
import { AccountCircleIcon } from '../IconsApp';
import css from './ContactList.module.css';

const ContactList = ({ visibleList, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.contactsList}>
      {visibleList.map(({ id, name, number }) =>
        isLoading ? (
          <div key={id}>
            <ContsctSkeleton />
          </div>
        ) : (
          <li key={id}>
            <div className={css['contacts-list__item']}>
              <span>
                <AccountCircleIcon size="large" />
              </span>
              <p
                style={{
                  width: '90px',
                  marginRight: 'auto',
                  marginLeft: '5px',
                  overflow: 'hidden',
                }}
              >
                {name}:
              </p>
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
