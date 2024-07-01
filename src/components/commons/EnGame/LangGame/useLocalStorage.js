const SETTINGS_KEY = 'lang_game';

let counterTRUE = 0;
let counterFALSE = 0;
const startIndex = 0;

export const useLocalStorage = () => {
  const getSettings = () => {
    const settingsJSON = localStorage.getItem(SETTINGS_KEY);
    if (settingsJSON) {
      return JSON.parse(settingsJSON);
    } else {
      // Return default settings if no settings are found in localStorage
      return { counterTRUE, startIndex, counterFALSE };
    }
  };

  const updateSettings = settings => {
    const s = getSettings();
    const newSettings = typeof settings === 'function' ? settings(s) : settings;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
  };

  return {
    getSettings,
    updateSettings,
  };
};
