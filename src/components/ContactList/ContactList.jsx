import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { StyledContacts } from './ContactList.styled';

export default function ContactsList ({ contacts, onDelete }) {
  return (
    <div>
      <StyledContacts>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </StyledContacts>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })).isRequired,
  onDelete: PropTypes.func.isRequired,
};
