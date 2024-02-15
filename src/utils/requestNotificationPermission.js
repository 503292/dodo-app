export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  let res = false;

  if (Notification.permission === 'granted') {
    // Повідомлення вже дозволено, ви можете відображати повідомлення.
    new Notification('Повідомлення дозволено!');
  } else if (Notification.permission === 'denied') {
    // Повідомлення відхилено, показати сповіщення або вікно з поясненням.
    showNotificationDeniedMessage();
  } else {
    // Запитати дозвіл, тут можливо вивести кнопку або інтерфейс для юзера.
    res = await Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        // Повідомлення дозволено, ви можете відображати повідомлення.
        new Notification('Повідомлення дозволено!');
        return true;
      } else if (perm === 'denied' || perm === 'default') {
        // Повідомлення відхилено, показати сповіщення або вікно з поясненням.
        showNotificationDeniedMessage();
        return false;
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

// TODO connect Notification in Task create
// useEffect(() => {
//   const timeout = setTimeout(() => {
//     new Notification(' fff');
//     console.log('bbb');
//   }, 3000);

//   return () => {
//     clearTimeout(timeout);
//   };
// }, []);

// Для використання нагадувань вам потрібно надати дозвіл для сповіщень
// To use reminders, you need to grant permission for notifications
