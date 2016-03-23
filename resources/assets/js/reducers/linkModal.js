export default (state = false, action) => {
  // console.log('Entered linkModal reducer', action);
  switch(action.type) {
    case 'TOGGLE_LINK_MODAL':
      return action.isActive;
  }
  return state;
}