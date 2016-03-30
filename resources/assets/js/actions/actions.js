import axios from 'axios';

export function fetchLinks() {
  const request = axios.get('/links');

  return {
    type: 'FETCH_LINKS',
    payload: request
  }
}

export function fetchTags() {
  const request = axios.get('/tags');

  return {
    type: 'FETCH_TAGS',
    payload: request
  }
}

/*
 **************** Filtering Actions *********************
 */

export function setSearchFilter(searchTerm) {
  return {
    type: 'SET_SEARCH_FILTER',
    searchTerm
  }
}

export function addTagFilter(tagFilterId) {
  return {
    type: 'ADD_TAG_FILTER',
    tagFilterId
  }
}

export function removeTagFilter(tagFilterId) {
  return {
    type: 'REMOVE_TAG_FILTER',
    tagFilterId
  }
}

export function clearTagFilters() {
  return {
    type: 'CLEAR_TAG_FILTERS'
  }
}

/*
 **************** Tag Actions *********************
 */

export function createTag(tag) {
  console.log('Dispatching createTag', tag);
  const request = axios({
    method: 'post',
    url: '/tags',
    data: {
      name: tag.name
    }
  });

  return {
    type: 'CREATE_TAG',
    payload: request
  }
}

export function editTag(tag) {
  console.log('Dispatching editTag', tag);
  const request = axios({
    method: 'patch',
    url: '/tags/'+ tag.id,
    data: {
      name: tag.name
    }
  });

  return {
    type: 'EDIT_TAG',
    payload: request
  }
}

export function deleteTag(tag) {
  console.log('Dispatching deleteTag', tag);
  const request = axios({
    method: 'delete',
    url: '/tags/'+ tag.id,
    data: {

    }
  });

  return {
    type: 'DELETE_TAG',
    payload: request
  }
}

/*
 **************** Link Actions *********************
 */

export function createLink(link, tagIds) {
  // console.log('Dispatching editLink', link);
  const request = axios({
    method: 'post',
    url: '/links',
    data: {
      url: link.url,
      title: link.title,
      description: link.description,
      tagIds
    }
  });

  return {
    type: 'CREATE_LINK',
    payload: request
  }
}

export function editLink(link, tagIds) {
  // console.log('Dispatching editLink', link);
  const request = axios({
    method: 'patch',
    url: '/links/'+link.id,
    data: {
      url: link.url,
      title: link.title,
      description: link.description,
      tagIds
    }
  });

  return {
    type: 'EDIT_LINK',
    payload: request
  }
}

export function deleteLink(linkId) {
  // console.log('Dispatching editLink', link);
  const request = axios({
    method: 'delete',
    url: '/links/' + linkId,
    data: {

    }
  });

  return {
    type: 'DELETE_LINK',
    payload: request
  }
}

export function exportToPdf() {
  const request = axios({
    method: 'get',
    url: 'links/export'
  });

  // console.log(request);

  return {
    type: 'EXPORT_TO_PDF',
    payload: request
  }
}