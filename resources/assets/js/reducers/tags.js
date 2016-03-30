import toastr from 'toastr';

function compareTags(tag1, tag2) {
  if(tag1.name < tag2.name) {
    return -1;
  } else if(tag1.name > tag2.name) {
    return 1;
  } else {
    return 0;
  }
}

export default (state = [], action) => {
  // console.log('Entered tags reducer', action);
  switch(action.type) {

    case 'FETCH_TAGS':
      // Add active property to keep track of active tag filters
      action.payload.data.map((tag) => tag.active=false);
      return action.payload.data.sort(compareTags);

    case 'CREATE_TAG':
      const tags = state.filter((tag) => tag.id != 123123123)
      if(action.payload.data.message == 'Tag Created'){
        return [...tags, action.payload.data.data].sort(compareTags);
      }

    case 'EDIT_TAG':
      if(action.payload.data.message == 'Tag Edited'){
        toastr.options.closeDuration = 30000;
        toastr.options.timeOut = 30000;
        toastr.options.extendedTimeOut = 30000;
        toastr.success("Tag was successfully edited!");
        let tags = state.filter((tag) => tag.id != action.payload.data.data.id)
        return [...tags, action.payload.data.data].sort(compareTags);
      } 

    case 'DELETE_TAG':
      if(action.payload.data.message == 'Tag Deleted'){
        toastr.success("Tag was successfully deleted!");
        let tags = state.filter((tag) => tag.id != action.payload.data.data.id)
        return tags.sort(compareTags);
      } 
  }
  return state;
}