import React, {ChangeEvent, useCallback} from 'react'
import s from './HW12.module.css'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../h10/bll/store'
import {changeThemeColor, themeInitStateType} from './bll/themeReducer'


export function HW12() {
   const themes = useSelector<AppStoreType, themeInitStateType>(state => state.theme)
   const dispatch = useDispatch()

   const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(changeThemeColor(String(e)))
   }, [dispatch])

   const blockStyle = `${s[themes.currentTheme]} ${s.wrapper}`
   const textStyle = `${s[themes.currentTheme + '-text']} ${s.text}`

   return (
       <div className={blockStyle}>
          <h3 className={textStyle}>
             The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. The
             selector will be called with the entire Redux store state as its only argument. The selector will be run
             whenever the function component renders (unless its reference hasn't changed since a previous render of
             the component so that a cached result can be returned by the hook without re-running the selector).
          </h3>
          <SuperSelect name={'change background-color'}
                       options={themes.themes}
                       onChangeOption={handleChange}
                       value={themes.currentTheme}
                       className={s.themeSelector}
          />
       </div>
   )
}
