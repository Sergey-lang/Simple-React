import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HOME: '/',
    PRE_JUNIORPlUS: '/pre-junior-plus',
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совпадение (что после "/" ничего не будет)*/}
                <Route exact path="/"  render={() => <Redirect to='/pre-junior'/>}/>
                <Route path="/pre-junior" render={() => <PreJunior/>}/>
                <Route path="/pre-junior-plus" render={() => <PreJunior/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
