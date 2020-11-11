import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PreJunior} from './pages/PreJunior/PreJunior';
import {Error404} from './pages/Error404/Error404';
import {JuniorPlus} from './pages/JuniorPlus/JuniorPlus';
import {Junior} from './pages/Junior/Junior';

// export const PATH = {
//     PRE_JUNIOR: '/pre-junior',
//     HOME: '/',
//     PRE_JUNIORPlUS: '/pre-junior-plus',
// }

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/"  render={() => <Redirect to='/pre-junior'/>}/>
                <Route path="/pre-junior" render={() => <PreJunior/>}/>
                <Route path="/junior" render={() => <Junior/>}/>
                <Route path="/junior-plus" render={() => <JuniorPlus/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}

