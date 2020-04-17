const reducer = (state, action) => {
  const temp = state;
  temp[`${action.state}`] = action.value;
  return temp;
};

export default reducer;
