export default (state = [], action) => {
  // console.log('Entered links reducer', action);
  switch(action.type) {
    case 'FETCH_LINKS':
      return action.payload.data;
  }
  return state;
}