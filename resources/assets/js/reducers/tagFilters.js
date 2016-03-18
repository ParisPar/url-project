export default (state = [], action) => {
  // console.log('Entered tagFilters reducer', state, action);
  switch(action.type) {
    case 'ADD_TAG_FILTER':
      if(state == null) {
        // console.log('1. Returning', [action.tagFilterId]);
        return [action.tagFilterId];
      } else {
        // console.log('2. Returning', [...state, action.tagFilterId]);
        return [...state, action.tagFilterId];
      }
      
    case 'REMOVE_TAG_FILTER':
      if(state) {
        return state.filter((tagFilterId) => {
          return tagFilterId != action.tagFilterId;
        });
      } else {

      }
      
    case 'CLEAR_TAG_FILTERS':
      return [];
  }
  return state;
}