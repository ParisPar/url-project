export default (state = '', action) => {
  // console.log('Entered searchFilter reducer', action);
  switch(action.type) {
    case 'SET_SEARCH_FILTER':
      return action.searchTerm;
  }
  return state;
}