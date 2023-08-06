import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = event =>
    dispatch(filterContact(event.target.value));

  return (
    <div className={css.filter}>
      <input
        className={css.filter__input}
        onChange={handleInputChange}
        placeholder="Find contact by name"
      />
    </div>
  );
};
