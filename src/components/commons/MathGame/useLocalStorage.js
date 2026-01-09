import { countEventEmitter } from '../../../utils/eventEmitter';

const SETTINGS_KEY = 'math_game_settings';

const MIN = 0;
const MAX = 10;
const OPERATOR = '+';
const COUNT = 0;
// TODO in progress
// const IS_SOUND = true;
// const IS_RANDOM = true;

export const useLocalStorage = () => {
  const getSettings = () => {
    const settingsJSON = localStorage.getItem(SETTINGS_KEY);
    if (settingsJSON) {
      return JSON.parse(settingsJSON);
    } else {
      // Return default settings if no settings are found in localStorage
      return { min: MIN, max: MAX, operator: OPERATOR };
    }
  };

  const updateSettings = (min, max, operator, count) => {
    const settings = { min, max, operator };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  };

  return {
    getSettings,
    updateSettings,
  };
};

export const getCountLocal = () => {
  try {
    const jsonValue = localStorage.getItem('countMath');
    return jsonValue != null ? JSON.parse(jsonValue) : COUNT;
  } catch (e) {
    console.log(e, 'err get count');
  }
};

export const setCountLocal = value => {
  if (value === undefined) return;

  try {
    localStorage.setItem('countMath', JSON.stringify(value));
    countEventEmitter.emit('countChanged', value);
  } catch (e) {
    console.log(e, 'err set count');
  }
};
