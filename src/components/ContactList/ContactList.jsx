import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice'; // Импортируем уже готовый селектор
import Contact from '../ContactList/Contact';
import './Contact.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // Используем селектор из contactsSlice.js
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










