function fetchWeather(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const baseUrl = 'https://api.darksky.net/forecast/';
  const accessKey = 'def124adcfa450fb204abe6f0e4e0c62';
  const queryLocale = `/${query}`;
  const settings = '?lang=uk&exclude=flags&units=si';

  return new Promise(() => {
    fetch(proxy + baseUrl + accessKey + queryLocale + settings)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        // console.log(data);
        if (data.error) {
          console.log('немає такого населеного пункту');

          return;
        }
        console.log(data, 'data');
      })
      .catch(error => console.log(error, 'err'));
  });
}

export default fetchWeather;
