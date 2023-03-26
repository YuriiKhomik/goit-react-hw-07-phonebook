import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading, getError } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { List } from './styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactsListItem } from 'components/ContactsListItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <List>
        {visibleContacts.map(item => {
          return <ContactsListItem item={item} key={item.id} />;
        })}
      </List>
    </>
  );
};
