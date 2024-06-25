const isDay = () => {
  const weather = JSON.parse(localStorage.getItem('localWeather'));
  if (!weather?.days?.[0]) return false;
  const { sunRise, sunSet } = weather?.days?.[0];

  const startTime = +sunRise.split(':').join('');
  const endTime = +sunSet.split(':').join('');

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = +`${currentHour}${currentMinutes}`;
  // Перемикаємо стан в залежності від часу
  if (currentTime >= startTime && currentTime < endTime) {
    // Між початковим і кінцевим числом години, ставимо стан на true
    return true;
  } else {
    // В іншому випадку, ставимо стан на false
    return false;
  }
};

export default isDay;
