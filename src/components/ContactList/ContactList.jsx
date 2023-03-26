import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { FaSpinner } from 'react-icons/fa';
import { List } from './styled';
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
      {error && <h1>ooops, smth went wrong :(</h1>}
      <List>
        {isLoading && !error && <FaSpinner size={24} className="spin" />}
        {contacts.map(item => {
          return <ContactsListItem item={item} key={item.id} />;
        })}
      </List>
    </>
  );
};
