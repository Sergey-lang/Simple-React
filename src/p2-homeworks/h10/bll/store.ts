import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    loading: loadingReducer,
});

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers);



// @ts-ignore
window.store = store; // for dev
