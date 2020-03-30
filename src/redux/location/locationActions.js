export const Type = {
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  GET_LOCATION: 'GET_LOCATION',
};

export const updateLocation = data => ({
  type: Type.UPDATE_LOCATION,
  payload: data,
});
