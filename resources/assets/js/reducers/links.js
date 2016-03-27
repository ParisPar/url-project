import toastr from 'toastr';

export default (state = [], action) => {
  // console.log('Entered links reducer', action);
  switch(action.type) {
    case 'FETCH_LINKS':
      return action.payload.data;

    //Insert a dummy link to instantly display it
    case 'OPTIMISTIC_LINK_CREATE':
      return [...state, action.link];

    //Remove the optimistic created link and add the 
    //one returned from the API call
    case 'CREATE_NEW_LINK':
      let links = state.filter((link) => link.id != 123123123)
      toastr.success("Link was successfully created!");
      if(action.payload.data.message == 'Link Created'){
        return [...links, action.payload.data.data];
      } else {
        return links;
      }

    case 'CREATE_LINK':
      if(action.payload.data.message == 'Link Created'){
        toastr.success("Link was successfully created!");
        return [...state, action.payload.data.data];
      } 

    case 'EDIT_LINK':
      if(action.payload.data.message == 'Link Edited'){
        toastr.options.closeDuration = 30000;
        toastr.options.timeOut = 30000;
        toastr.options.extendedTimeOut = 30000;
        toastr.success("Link was successfully edited!");
        let links = state.filter((link) => link.id != action.payload.data.data.id)
        return [...links, action.payload.data.data];
      } 
  }
  return state;
}