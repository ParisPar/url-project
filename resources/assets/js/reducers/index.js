import { combineReducers } from 'redux';
import LinksReducer from './links';
import TagsReducer from './tags';

const rootReducer = combineReducers({
  links: LinksReducer,
  tags: TagsReducer
});

export default rootReducer;