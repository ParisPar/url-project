import toastr from 'toastr';

toastr.options.closeDuration = 300;
toastr.options.timeOut = 3000; // How long the toast will display without user interaction
toastr.options.extendedTimeOut = 3000; // How long the toast will display after a user hovers over it

function compareTags(tag1, tag2) {
  if(tag1.name.toLowerCase() < tag2.name.toLowerCase()) {
    return -1;
  } else if(tag1.name.toLowerCase() > tag2.name.toLowerCase()) {
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
        toastr.success("Tag was successfully created!");
        return [...tags, action.payload.data.data].sort(compareTags);
      }

    case 'EDIT_TAG':
      if(action.payload.data.message == 'Tag Edited'){
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