import axios from 'axios';

export function fetchLinks() {
  const request = axios.get('http://localhost:3000/links');

  return {
    type: 'FETCH_LINKS',
    payload: request
  }
}

export function fetchTags() {
  const request = axios.get('http://localhost:3000/tags');

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