export default (state = [], action) => {
  console.log('Entered tags reducer', action);
  switch(action.type) {
    case 'FETCH_TAGS':
      return action.payload.data;
  }
  return state;
}