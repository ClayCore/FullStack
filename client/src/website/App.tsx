import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { Switch, Route } from 'react-router-dom';
import connectAllProps from '~/utils/connect';
import Container from './Container';
import Loader from './Loader';
import React, { Suspense } from 'react';

import Home from './pages/Home';
import Notifications from './pages/Notifications';
import ErrorPage from './pages/Error';
import About from './pages/About';

type State = {
    interval: number;
    is_loading: boolean;
};

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            interval: 0,
            is_loading: false,
        };
    }

    render(): React.ReactElement<any> {
        const { is_loading } = this.state;
        const { error } = this.props.state.error;

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
                            path="/about"
                            render={(props) => <About {...props} />}
                        />
                        <Route
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
