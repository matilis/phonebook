import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import editSvg from 'images/icon-pencil.png';
import deleteSvg from 'images/icon-garbage.png';
import saveSvg from 'images/icon-save.gif';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedNumber, setEditedNumber] = useState('');

  const dispatch = useDispatch();

  const handleEdit = (id, name, number) => {
    setEditingContactId(id);
    setEditedName(name);
    setEditedNumber(number);
  };

  const handleSave = id => {
    const editedContact = {
      id: id,
      name: editedName,
      number: editedNumber,
    };

    dispatch(editContact(editedContact));

    Notiflix.Notify.info(`${editedName} edited`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });

    setEditingContactId(null);
    setEditedName('');
    setEditedNumber('');
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.failure(`Contact DELETED`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });
  };

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contacts__item}>
          {editingContactId === contact.id ? (
            <>
              <input
                type="text"
                value={editedName}
                className={css.contacts__wrapperName}
                onChange={e => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedNumber}
                className={css.contacts__wrapperNumber}
                onChange={e => setEditedNumber(e.target.value)}
              />
              <button
                className={css.contacts__wrapperBtn}
                type="button"
                onClick={() => handleSave(contact.id)}
              >
                <img
                  className={css.contact__icon}
                  src={saveSvg}
                  alt="save icon"
                />
              </button>
            </>
          ) : (
            <>
              <p className={css.contacts__name}>{contact.name}</p>
              <p className={css.contacts__number}>{contact.number}</p>
              <div className={css.contacts__btn}>
                <button
                  type="button"
                  onClick={() =>
                    handleEdit(contact.id, contact.name, contact.number)
                  }
                  className={css.contacts__button}
                >
                  <img
                    className={css.contact__icon}
                    src={editSvg}
                    alt="edit icon pencil"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(contact.id)}
                  className={css.contacts__button}
                >
                  <img
                    className={css.contact__icon}
                    src={deleteSvg}
                    alt="delete icon garbage"
                  />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
