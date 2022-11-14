import { useDispatch } from 'react-redux';

import { setStatusFilter } from 'globalState/slices/filterSlice';
import PropTypes from 'prop-types';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Filter = ({ title, contacts }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setStatusFilter(value));
  };
  return (
    <>
      {title && <h3>{title}</h3>}
      <div>
        <input
          style={{
            position: 'absolute',
            paddingLeft: '25px',
          }}
          type="text"
          name="filter"
          placeholder="Find a contact"
          onChange={handleChange}
        />
        <span style={{ position: 'relative', top: '10px', left: '5px' }}>
          <PersonSearchIcon sx={{ mr: 1, fontSize: 18 }} />
        </span>
      </div>
      {contacts().length === 0 && <p>not found</p>}
    </>
  );
};
export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.func.isRequired,
};
