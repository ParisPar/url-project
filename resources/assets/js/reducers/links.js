import toastr from 'toastr';

function compareLinks(link1, link2) {
  if(link1.title < link2.title) {
    return -1;
  } else if(link1.title > link2.title) {
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
        toastr.options.closeDuration = 30000;
        toastr.options.timeOut = 30000;
        toastr.options.extendedTimeOut = 30000;
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
  }
  return state;
}