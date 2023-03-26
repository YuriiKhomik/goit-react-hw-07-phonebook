import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List, Contact } from './styled';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // return (
  //   <div>
  //     {isLoading && <b>Loading tasks...</b>}
  //     {error && <b>{error}</b>}
  //     <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
  //   </div>
  // );
  // const filter = useSelector(getFilter);

  // const visibleContacts = items.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // return (
  //   <List>
  //     {visibleContacts.map(({ id, name, phone }) => {
  //       return (
  //         <li key={id}>
  //           <Box display="flex" alignItems="center">
  //             <Contact>
  //               {name}: {phone}
  //             </Contact>
  //             <button type="button">Delete</button>
  //           </Box>
  //         </li>
  //       );
  //     })}
  //   </List>
  // );
};
