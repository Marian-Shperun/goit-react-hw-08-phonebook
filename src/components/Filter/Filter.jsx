import { useDispatch } from 'react-redux';

import { setStatusFilter } from 'globalState/slices/filterSlice';
import PropTypes from 'prop-types';

const Filter = ({ title, contacts }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setStatusFilter(value));
  };
  return (
    <>
      {title && <h3>{title}</h3>}
      <input
        type="text"
        name="filter"
        placeholder="Find a contact"
        onChange={handleChange}
      />
      {contacts().length === 0 && <p>not found</p>}
    </>
  );
};
export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.func.isRequired,
};
