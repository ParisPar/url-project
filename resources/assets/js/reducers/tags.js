export default (state = [], action) => {
  // console.log('Entered tags reducer', action);
  switch(action.type) {

    case 'FETCH_TAGS':
      // Add active property to keep track of active tag filters
      action.payload.data.map((tag) => tag.active=false);
      return action.payload.data;

    //Insert a dummy tag to instantly display it
    case 'OPTIMISTIC_TAG_CREATE':
      return [...state, action.tag];

    //Remove the optimistic created tag and add the 
    //one returned from the API call
    case 'CREATE_NEW_TAG':
      const tags = state.filter((tag) => tag.id != 123123123)
      return [...tags, action.payload.data.data];
  }
  return state;
}