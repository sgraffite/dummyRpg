import { observable, computed, action, extendObservable, useStrict } from 'mobx';

useStrict(true);
export default class appStore {
    characters = observable([]);

    setCharacters = action((characters) => {
        this.characters.push(...characters);
    });

    deleteCharacter = action((index) => {
        this.characters.splice(index, 1);
    });
}