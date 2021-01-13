import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import Loader from './Loader';
import React, { Suspense } from 'react';
import fetch from '@flux/shared/fetch';
import { API_VERSION } from '@flux/shared/routes';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

type State = {
    interval: number;
    is_loading: boolean;
    error: string | null;
};

class App extends React.Component<Props, State> {
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
                    <Suspense fallback={<Loader />}>
                        <ErrorPage error={error} {...this.props} />
                    </Suspense>
                </Container>
            );
        }
        return (
            <Container>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path="/">
                            <Home {...this.props} />
                        </Route>
                    </Switch>
                </Suspense>
            </Container>
        );
    }
}

export default connectAllProps(App);
