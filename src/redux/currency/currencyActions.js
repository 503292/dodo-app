export const Type = {
  ADD_CURRENCY: 'ADD_CURRENCY',
  GET_CURRENCY: 'GET_CURRENCY',
};

export const addCurrency = data => ({
  type: Type.ADD_CURRENCY,
  payload: data,
});
