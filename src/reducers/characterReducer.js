//import CharacterActions from '../actions/characterActions';
import * as CharacterActions from '../actions/characterActions';

let defaultState = [];

export default function characterReducer(state = defaultState, action) {
    switch (action.type) {
        case CharacterActions.LOAD:
            return action.characters;
        /*case CharacterActions.DELETE:
            const characters = state.splice(action.index, 1);
            return characters;*/
        default:
            return state;
    }
}
