import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { Switch, Route } from 'react-router-dom';
import connectAllProps from '@flux/shared/connect';
import Container from './Container';
import Loader from './Loader';
import React from 'react';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

type States = {
    interval: number;
    is_loading: boolean;
    error: string | null;
};

class App extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);

        this.state = {
            interval: 0,
            is_loading: false,
            error: null,
        };
    }

    render(): React.ReactElement<any> {
        const { is_loading, error } = this.state;

        if (is_loading) {
            return <Loader />;
        }

        if (error) {
            return (
                <Container>
                    <ErrorPage error={error} {...this.props} />
                </Container>
            );
        }
        return (
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Home {...this.props} />
                    </Route>
                </Switch>
            </Container>
        );
    }
}

export default connectAllProps(App);
