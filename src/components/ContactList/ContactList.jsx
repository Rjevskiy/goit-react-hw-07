import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { createSelector } from '@reduxjs/toolkit';
import Contact from '../ContactList/Contact';
import './Contact.css';

// Мемоизированный селектор для фильтрации контактов
const selectFilteredContacts = createSelector(
  [state => state.contacts.items, state => state.filters],
  (contacts, { name, searchType }) => {
    return contacts.filter((contact) => {
      const valueToSearch = searchType === 'name' ? contact.name : contact.number;
      return valueToSearch.toLowerCase().includes(name.toLowerCase());
    });
  }
);

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  // Обработчик удаления контакта
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className="contact">
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;










