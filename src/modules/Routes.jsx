import React from "react";
import {Route, IndexRoute} from 'react-router';
import App from '../App';

const stories = (type) => {
    return props => <Story {...props} type = {type} />
}

const home = stories('topstories');
const news = stories('newstories');

const routes = (
    <Route path = "/" component = {App}>
        <IndexRoute component = {home} />
        <Route path = "/news" component = {news} />
    </Route>
);