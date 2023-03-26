import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { List } from './styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactsListItem } from 'components/ContactsListItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <List>
        {contacts.map(item => {
          return <ContactsListItem item={item} key={item.id} />;
        })}
      </List>
    </>
  );
};
