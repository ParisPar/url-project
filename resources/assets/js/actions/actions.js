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