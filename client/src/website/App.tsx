import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import Loader from './Loader';
import React, { Suspense } from 'react';

import Home from './pages/Home';
import Notifications from './pages/Notifications';
import ErrorPage from './pages/ErrorPage';

type State = {
    interval: number;
    is_loading: boolean;
    error: Error | undefined;
};

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            interval: 0,
            is_loading: false,
            error: undefined,
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
                    <Suspense fallback={<Loader />}>
                        <ErrorPage error={error} {...this.props} />
                    </Suspense>
                </Container>
            );
        }

        const notFoundError: Error = {
            name: '404 Not Found',
            message: `Not found for [${window.location.href}]`,
        };
        return (
            <Container>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        />
                        <Route
                            path="/home"
                            render={(props) => <Home {...props} />}
                        />
                        <Route
                            path="/notifications"
                            render={(props) => <Notifications {...props} />}
                        />
                        <Route
                            path="/error"
                            render={(props) => (
                                <ErrorPage {...props} error={notFoundError} />
                            )}
                        />
                    </Switch>
                </Suspense>
            </Container>
        );
    }
}

export default connectAllProps(App);
