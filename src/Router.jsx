import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from './Auth'
import { Home, Reset, SignIn, SignUp } from './templates'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signin/reset' component={Reset} />
            <Auth>
                <Route exact path ='(/)?' component={Home} />
            </Auth>
        </Switch>
    )
}

export default Router