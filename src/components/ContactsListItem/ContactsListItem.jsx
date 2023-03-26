import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Box } from 'components/Box';
import { Contact } from 'components/ContactList/styled';

export const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  return (
    <li>
      <Box display="flex" alignItems="center">
        <Contact>
          {item.name}: {item.phone}
        </Contact>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </Box>
    </li>
  );
};
