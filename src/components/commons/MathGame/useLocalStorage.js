const STORAGE_KEY = 'math_game';

const DEFAULT_STATE = {
  min: 0,
  max: 10,
  operator: '+',
  count: 0,
  isRandomOperator: false,
  isSound: true,
};

export const useLocalStorage = () => {
  const getSettings = () => {
    try {
      const json = localStorage.getItem(STORAGE_KEY);
      return json ? { ...DEFAULT_STATE, ...JSON.parse(json) } : DEFAULT_STATE;
    } catch (e) {
      console.log('getSettings error', e);
      return DEFAULT_STATE;
    }
  };

  const setSettings = newState => {
    if (!newState) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.log('setSettings error', e);
    }
  };

  return {
    getSettings,
    setSettings,
  };
};
