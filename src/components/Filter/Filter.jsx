import { useDispatch } from 'react-redux';

import { setStatusFilter } from 'globalState/contacts/filterSlice';

import PropTypes from 'prop-types';
import { PersonSearchIcon } from '../IconsApp';
import { IconFilter } from './Filter.styled';

const Filter = ({ contacts, scroll }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setStatusFilter(value));
  };
  return (
    <>
      <div
        style={{
          position: 'relative',
          marginBottom: '10px',
        }}
      >
        <input
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          onChange={handleChange}
        />
        <IconFilter scroll={scroll}>
          <PersonSearchIcon sx={{ mr: 1, fontSize: 18 }} />
        </IconFilter>
      </div>
      {contacts().length === 0 && (
        <b style={{ display: 'block', marginTop: '15px' }}>Not found</b>
      )}
    </>
  );
};
export default Filter;

Filter.propTypes = {
  contacts: PropTypes.func.isRequired,
  scroll: PropTypes.number,
};
