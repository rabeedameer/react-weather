import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import History from './History';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/history" component={History}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

)

export default Router;