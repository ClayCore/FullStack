import { Route, Switch } from 'react-router-dom';
import Container from './Container';
import React from 'react';

import Home from './website/pages/Home';
import ErrorPage from './website/pages/ErrorPage';

type Props = {};
type States = {};

export default class Routes extends React.Component<Props, States> {
    render(): any {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route path="/error" render={(props) => <ErrorPage {...props} />} />
                </Switch>
            </Container>
        );
    }
}
