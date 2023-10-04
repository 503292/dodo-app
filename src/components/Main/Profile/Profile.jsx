import React from 'react';

import photoImg from '../../../assets/image/inProgress/logo-66x66.png';
import css from './Prtofile.module.scss';

const Profile = () => {
  const user = {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    age: 30,
    gender: 'чоловіча / жіноча',
    email: 'user@example.com',
    phone: '+1234567890',
    address: 'Вулиця, Місто, Країна',
    occupation: 'Професія / Робота',
    education: 'Освіта',
    hobbies: ['Хобі 1', 'Хобі 2', 'Хобі 3'],
    family: ['', ''],
    familyStatus: 'Сімейний стан',
    children: ["Ім'я дитини 1", "Ім'я дитини 2"],
    socialMedia: {
      facebook: 'Посилання на Facebook',
      twitter: 'Посилання на Twitter',
      instagram: 'Посилання на Instagram',
    },
    error: '',
    damage: [],
    countTomato: 0, // Кількість кинутих помідорів
    description: '',
    danger: '', //  0, 1, 2, 3, 4
  };

  const {
    firstName,
    lastName,
    age,
    gender,
    email,
    phone,
    address,
    occupation,
    education,
    hobbies,
    family,
    familyStatus,
    children,
    socialMedia,
    error,
    damage,
    countTomato,
    description,
    danger,
  } = user;

  return (
    <div className={css.profile}>
      {error && <div className={css.error}>{error}</div>}
      {/* <h1>Профіль користувача</h1> */}
      <div className={css.profileHeader}>
        {/* TODO add realData photo */}
        <img
          src={photoImg}
          alt="Фото користувача"
          className={css.profilePhoto}
        />
        {/* <h1>Профіль користувача</h1> */}
        <div>
          <div>
            <strong>Ім'я:</strong> {firstName}
          </div>
          <div>
            <strong>Прізвище:</strong> {lastName}
          </div>
          <div>
            <strong>Вік:</strong> {age}
          </div>
          <strong>Телефон:</strong> {phone}
        </div>
      </div>

      <div>
        <strong>Стать:</strong> {gender}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div></div>
      <div>
        <strong>Адреса:</strong> {address}
      </div>
      <div>
        <strong>Професія / Робота:</strong> {occupation}
      </div>
      <div>
        <strong>Освіта:</strong> {education}
      </div>
      <div>
        <strong>Хобі:</strong> {hobbies.join(', ')}
      </div>
      <div>
        <strong>Сім'я:</strong> {family.join(', ')}
      </div>
      <div>
        <strong>Сімейний стан:</strong> {familyStatus}
      </div>
      <div>
        <strong>Діти:</strong> {children.join(', ')}
      </div>
      <div>
        <strong>Посилання на соціальні мережі:</strong>
        <ul>
          <li>Facebook: {socialMedia.facebook}</li>
          <li>Twitter: {socialMedia.twitter}</li>
          <li>Instagram: {socialMedia.instagram}</li>
        </ul>
      </div>
      <div>
        <strong>Кількість кинутих помідорів:</strong> {countTomato}
      </div>
      <div>
        <strong>Опис:</strong> {description}
      </div>
      <div>
        <strong>Рівень небезпеки:</strong> {danger}
      </div>
    </div>
  );
};

export default Profile;
