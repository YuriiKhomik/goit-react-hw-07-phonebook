import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setContactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={value} onChange={changeFilter}></input>
    </>
  );
};
