import {ActionTypes, InitialStateType, PersonType,} from '../HW8';

export const homeWorkReducer = (state: InitialStateType, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                return [...state.sort(
                    (a: PersonType, b: PersonType) => {
                        if (a.name < b.name) {
                            return -1
                        } else if (a.name > b.name) {
                            return 1
                        } else return 0
                    }
                )]
            } else if (action.payload === 'down') {
                return [...state.sort(
                    (a: PersonType, b: PersonType) => {
                        if (a.name < b.name) {
                            return -1
                        } else if (a.name > b.name) {
                            return 1
                        } else return 0
                    }
                ).reverse()]
            }

        case 'CHECK': {
            return [...state.filter(p => p.age > 18)]
        }
        default:
            return state
    }
};