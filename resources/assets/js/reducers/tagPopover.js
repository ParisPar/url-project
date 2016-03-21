export default (state = false, action) => {
  // console.log('Entered searchFilter reducer', action);
  switch(action.type) {
    case 'TOGGLE_TAG_POPOVER':
      return action.isActive;
  }
  return state;
}