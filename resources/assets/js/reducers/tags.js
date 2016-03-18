export default (state = [], action) => {
  // console.log('Entered tags reducer', action);
  switch(action.type) {
    case 'FETCH_TAGS':
      // Add active property to keep track of active tag filters
      action.payload.data.map((tag) => tag.active=false);
      return action.payload.data;
  }
  return state;
}