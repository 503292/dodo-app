const SETTINGS_KEY = 'math_game_settings';

const MIN = 0;
const MAX = 10;
const OPERATOR = '+';
const COUNT = 0;

export const useLocalStorage = () => {
  const getSettings = () => {
    const settingsJSON = localStorage.getItem(SETTINGS_KEY);
    if (settingsJSON) {
      return JSON.parse(settingsJSON);
    } else {
      // Return default settings if no settings are found in localStorage
      return { min: MIN, max: MAX, operator: OPERATOR, count: COUNT };
    }
  };

  const updateSettings = (min, max, operator, count) => {
    const settings = { min, max, operator, count };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  };

  return {
    getSettings,
    updateSettings,
  };
};
