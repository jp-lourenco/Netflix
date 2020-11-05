import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages';
import { Browse } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

function App() {
    const user = null;

    return (
        <Router>
            <Switch>
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.SING_IN}
                    path={ROUTES.HOME}
                >
                    <Browse />;
                </IsUserRedirect>
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.SING_IN}
                    path={ROUTES.BROWSE}
                >
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}

export default App;
