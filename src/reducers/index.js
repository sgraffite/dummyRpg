import { combineReducers } from 'redux';
import CharacterReducer from './characterReducer';

const rootReducer = combineReducers({
    characters: CharacterReducer
});

export default rootReducer;