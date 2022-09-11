import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onFilterChange = event => {
    dispatch(filterContact(event.currentTarget.value.trim()));
  };
  return (
    <FilterContainer>
      <label>
        Filter
        <FilterInput type="name" value={filter} onChange={onFilterChange} />
      </label>
    </FilterContainer>
  );
};

export default Filter;
