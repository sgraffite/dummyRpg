import { observable, computed, action, extendObservable, useStrict } from 'mobx';

useStrict(true);
export class character {
    constructor(initialState) {
        extendObservable(this, initialState);
    }

    load = action(() => {

    });
}