import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';

const rootReducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
});

export type AppStoreType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);

// @ts-ignore
window.store = store; // for dev
