import { createStore } from 'redux';
import projects from './reducers/projects';
const store = createStore(projects);
export default store;