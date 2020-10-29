import {InitStateType, loadingAC, loadingReducer} from './loadingReducer';

test('check changing loading value on true', () => {
    const startState: InitStateType = {
        loading: false
    }
    const endState = loadingReducer(startState, loadingAC(true))

    expect(endState.loading).toBeTruthy()
})