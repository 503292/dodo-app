import React, { useState } from 'react';

import Toogle from '../Toogle/Toogle';
import { requestNotificationPermission } from '../../../utils/requestNotificationPermission';

import css from './ToogleReminder.module.scss';

const ToogleReminder = () => {
  const [isPushNotification, setIsPushNotification] = useState(
    window?.Notification?.permission === 'granted',
  );

  const handleNotification = async e => {
    e.preventDefault();
    const res = await requestNotificationPermission();
    if (res) return setIsPushNotification(res);
  };
  return (
    <>
      <div title={isPushNotification ? 'is ON' : 'is OFF'} className={css.wrap}>
        <Toogle
          isChecked={isPushNotification}
          handleCheck={e => handleNotification(e)}
        />
        <span>Сповіщення</span>
        {isPushNotification ? <span>включені</span> : <span>виключені</span>}
      </div>
    </>
  );
};

export default ToogleReminder;
