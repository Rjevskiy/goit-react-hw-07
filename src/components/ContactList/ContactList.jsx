import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { createSelector } from '@reduxjs/toolkit';
import Contact from '../ContactList/Contact';
import './Contact.css';


const selectFilteredContacts = createSelector(
  [state => state.contacts.items, state => state.filters.name, state => state.filters.searchType],
  (contacts, filter, searchType) => {
    return contacts.filter(contact => {
      const valueToSearch = searchType === 'name' ? contact.name : contact.number;
      return valueToSearch.toLowerCase().includes(filter.toLowerCase());
    });
  }
);

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact">
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;






