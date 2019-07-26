import { createStore } from 'redux'
import categories from './reducers/categories'
const store = createStore(categories);
export default store;