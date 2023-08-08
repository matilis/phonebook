import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './Modal.module.css';
import closedSvg from 'images/icon-closed.gif';

export const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modal__overlay} onClick={onClose}>
      <button onClick={onClose} className={css.modal__close}>
        <img
          className={css.modal__iconClosed}
          src={closedSvg}
          alt="closed icon"
        />
      </button>
      <div
        className={css.modal__content}
        onClick={event => event.stopPropagation()}
      >
        <div className={css.usermenu__text}>
          Welcome <p className={css.usermenu__name}>{user.name}</p>
        </div>
        <button
          className={css.usermenu__btn}
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
