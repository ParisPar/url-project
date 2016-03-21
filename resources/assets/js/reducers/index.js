import { combineReducers } from 'redux';
import LinksReducer from './links';
import TagsReducer from './tags';
import SearchFilterReducer from './searchFilter';
import TagFiltersReducer from './tagFilters';
import TagPopoverIsActive from './tagPopover';

const rootReducer = combineReducers({
  links: LinksReducer,
  tags: TagsReducer,
  searchFilter: SearchFilterReducer,
  tagFilters: TagFiltersReducer,
  tagPopoverIsActive: TagPopoverIsActive
});

export default rootReducer;