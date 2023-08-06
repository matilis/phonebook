import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import React, { useState, useEffect } from 'react';
import css from './Home.module.css';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const [showNiceDay, setShowNiceDay] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [to, setTo] = useState(false);
  const [phonebook, setPhonebook] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNiceDay(true);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTo(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhonebook(true);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.homePage}>
        {isLoggedIn ? (
          <div className={css.homePage__logout}>
            <h1 className={css.homePage__titleLogIn}>Phonebook</h1>
            {showNiceDay && (
              <p className={css.homePage__online}>Have a nice day</p>
            )}
          </div>
        ) : (
          <div className={css.homePage__logout}>
            {welcome && <p className={css.homePage__beforeTitle}>Welcome</p>}
            {to && <p className={css.homePage__beforeTitle}>to</p>}
            {phonebook && <h1 className={css.homePage__title}>Phonebook</h1>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
