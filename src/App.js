import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages';
import * as ROUTES from './constants/routes';
import {
    IsUserRedirect,
    isUserRedirect,
    ProtectedRoute,
} from './helpers/routes';

function App() {
    const user = null;

    return (
        <Router>
            <Switch>
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.HOME}
                >
                    <Home />;
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}

export default App;
