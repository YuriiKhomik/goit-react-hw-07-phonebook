import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

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
