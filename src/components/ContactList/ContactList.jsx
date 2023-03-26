import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List, Contact } from './styled';
import { Box } from 'components/Box';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Box display="flex" alignItems="center">
              <Contact>
                {name}: {number}
              </Contact>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </Box>
          </li>
        );
      })}
    </List>
  );
};
