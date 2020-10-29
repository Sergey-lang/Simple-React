export type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
};

export const loadingReducer = (state: InitStateType = initState, action: HW10ReducersTypes): InitStateType => {
    switch (action.type) {
        case Actions_Type.LOADING: {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};


enum Actions_Type {
    LOADING = 'LOADING/LOADING'
}

export type Loading = {
    type: Actions_Type.LOADING
    loading: boolean
}

export const loadingAC = (loading:boolean): Loading => ({type: Actions_Type.LOADING, loading});

type HW10ReducersTypes = Loading