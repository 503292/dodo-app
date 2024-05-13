import icon from '../assets/image/inProgress/sun.png';

let count = 1;

export async function requestNotificationPermission() {
  let res = false;

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
    return res;
  }

  if (window.Notification.permission === 'granted') {
    // Повідомлення вже дозволено, ви можете відображати повідомлення.
    ++count;
    console.log(count);
    new window.Notification('Повідомлення дозволено! 1', {
      vibrate: [200, 100, 200],
      icon: icon,
      body: `count ${count}`,
    });
    res = true;
  } else if (window.Notification.permission === 'denied') {
    // Повідомлення відхилено, показати сповіщення або вікно з поясненням.
    showNotificationDeniedMessage();
    res = false;
  } else {
    // Запитати дозвіл, тут можливо вивести кнопку або інтерфейс для юзера.
    res = await window.Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        // Повідомлення дозволено, ви можете відображати повідомлення.
        new window.Notification('Повідомлення дозволено! 2');
        res = true;
      } else if (perm === 'denied' || perm === 'default') {
        // Повідомлення відхилено, показати сповіщення або вікно з поясненням.
        showNotificationDeniedMessage();
        res = false;
      }
    });
  }
  return res;
}

function showNotificationDeniedMessage() {
  // Показати повідомлення або вікно з поясненням і можливістю взаємодії.
  alert(
    'Ви відхилили показ повідомлень. Будь ласка, дозвольте їх у налаштуваннях браузера.',
  );
}

// TODO fix when user goout from site
// let notification;
// let interval;

// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'hidden') {
//     const leaveDate = new Date();
//     interval = setInterval(() => {
//       notification = new Notification('Come back please', {
//         body: `You have been gone for ${Math.round(
//           (new Date() - leaveDate) / 1000,
//         )} seconds`,
//         tag: 'Come back',
//       });
//     }, 1000);
//   } else {
//     if (interval) clearInterval(interval);
//     if (notification) notification.close();
//   }
// });

export function sendMessage(text) {
  // Notification.requestPermission().then(perm => {
  if (window.Notification.permission === 'granted') {
    // console.log('ddd');
    // Повідомлення дозволено, ви можете відображати повідомлення.
    new window.Notification(text);
  }
  // });
  // const timeout = setTimeout(() => {
  //   const random = toString(Math.floor(Math.random() * 10));
  //   console.log(typeof random, 'rrrr');
  //   new Notification(`ddd ${random}`);
  //   console.log(Notification.permission, 'bbb');
  //   console.log(text, 'bbb222');
  // }, 200);

  // return () => {
  //   clearTimeout(timeout);
  // };
}
// TODO connect Notification in Task create
// useEffect(() => {
// const timeout = setTimeout(() => {
//   new Notification(' fff');
//   console.log('bbb');
// }, 3000);

// return () => {
//   clearTimeout(timeout);
// };
// }, []);

// Для використання нагадувань вам потрібно надати дозвіл для сповіщень
// To use reminders, you need to grant permission for notifications
