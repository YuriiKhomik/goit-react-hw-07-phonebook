import { PhonebookForm } from './PhonebookForm';
import { ContactList } from './ContactList';
import { Box } from './Box';
import { Filter } from './Filter';

export function App() {
  return (
    <Box p="4">
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </Box>
  );
}
