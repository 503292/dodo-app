export const Type = {
  UPDATE_CURRENCY: 'UPDATE_CURRENCY',
  GET_CURRENCY: 'GET_CURRENCY',
};

export const updateCurrency = data => ({
  type: Type.UPDATE_CURRENCY,
  payload: data,
});
