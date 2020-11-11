enum ActionsType {
    CHANGE_THEME_COLOR = 'THEME/CHANGE-THEME-COLOR'
}

type Actions = ReturnType<typeof changeThemeColor>

export type themeInitStateType = {
    themes: string[]
    currentTheme: string
}

const initState: themeInitStateType = {
    themes: ['dark', 'red', 'some', 'purple'],
    currentTheme: 'some',
};

export const themeReducer = (state: themeInitStateType = initState, action: Actions): themeInitStateType => {
    switch (action.type) {
        case ActionsType.CHANGE_THEME_COLOR: {
            return {
                ...state,
                currentTheme: action.payload.color
            };
        }
        default:
            return state;
    }
};

type ChangeThemeColorType = {
    type: ActionsType.CHANGE_THEME_COLOR,
    payload: {
        color: string
    }
}
export const changeThemeColor = (color: string): ChangeThemeColorType => ({
    type: ActionsType.CHANGE_THEME_COLOR,
    payload: {
        color
    }
})