export const LOAD = 'CHARACTERS_LOAD';

export function loadCharacters(characters) {
    return {
        type: LOAD,
        characters,
    }
}

/*export default class CharacterActions {
    static LOAD = 'CHARACTERS_LOAD';
    static DELETE = 'CHARACTER_DELETE';

    static load(characters){
        return {
            type: CharacterActions.LOAD,
            characters: characters,
        };
    }

    static delete(index) {
        return {
            type: CharacterActions.DELETE,
            index: index,
        };
    }
}*/