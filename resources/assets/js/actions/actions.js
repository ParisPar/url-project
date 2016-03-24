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

export function toggleTagPopover(isActive) {
  return {
    type: 'TOGGLE_TAG_POPOVER',
    isActive
  }
}

export function optimisticTagCreate(tagName) {
  return {
    type: 'OPTIMISTIC_TAG_CREATE',
    tag: {
      name: tagName,
      id: 123123123
    }
  }
}

export function createNewTag(tagName) {
  // console.log('Dispatching createNewTag', tagName);
  const request = axios({
    method: 'post',
    url: '/tags',
    data: {
      name: tagName
    }
  });

  return {
    type: 'CREATE_NEW_TAG',
    payload: request
  }
}

export function optimisticLinkCreate(link) {
  return {
    type: 'OPTIMISTIC_LINK_CREATE',
    link: {
      key: link.id,
      id: link.id,
      url: link.url,
      title: link.title,
      description: link.description,
      tags: link.selectedTags
    }
  }
}

export function createNewLink(link) {
  // console.log('Dispatching createNewLink', link);
  const request = axios({
    method: 'post',
    url: '/links',
    data: {
      key: link.id,
      url: link.url,
      title: link.title,
      description: link.description,
      tags: link.selectedTags
    }
  });

  return {
    type: 'CREATE_NEW_LINK',
    payload: request
  }
}