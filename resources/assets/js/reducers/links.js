import toastr from 'toastr';

toastr.options.closeDuration = 300;
toastr.options.timeOut = 3000; // How long the toast will display without user interaction
toastr.options.extendedTimeOut = 3000; // How long the toast will display after a user hovers over it

function compareLinks(link1, link2) {
  if(link1.title.toLowerCase() < link2.title.toLowerCase()) {
    return -1;
  } else if(link1.title.toLowerCase() > link2.title.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

export default (state = [], action) => {
  // console.log('Entered links reducer', action);
  switch(action.type) {
    case 'FETCH_LINKS':
      return action.payload.data.sort(compareLinks);

    case 'CREATE_LINK':
      if(action.payload.data.message == 'Link Created'){
        toastr.success("Link was successfully created!");
        return [...state, action.payload.data.data].sort(compareLinks);
      } 

    case 'EDIT_LINK':
      if(action.payload.data.message == 'Link Edited'){
        toastr.success("Link was successfully edited!");
        let links = state.filter((link) => link.id != action.payload.data.data.id)
        return [...links, action.payload.data.data].sort(compareLinks);
      } 

    case 'DELETE_LINK':
      if(action.payload.data.message == 'Link Deleted'){
        toastr.success("Link was successfully deleted!");
        let links = state.filter((link) => link.id != action.payload.data.data.id)
        return links.sort(compareLinks);
      }

    // Update the tag name of currently showing links
    case 'EDIT_TAG':
      if(action.payload.data.message == 'Tag Edited'){
        let links = [...state];
        let updatedLinks = links.map((link) => {
          link.tags.forEach((tag) => {
            if(tag.id == action.payload.data.data.id) {
              tag.name = action.payload.data.data.name;
            }
          })
          return link;
        })
        return updatedLinks;
      }

    case 'DELETE_TAG':
      if(action.payload.data.message == 'Tag Deleted'){
        let links = [...state];
        let updatedLinks = links.map((link) => {
          let updatedTags = link.tags.filter((tag) => tag.id != action.payload.data.data.id)
          link.tags = updatedTags;
          return link;
        })
        return updatedLinks;
      } 
  }
  return state;
}