import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { Redirect } from 'react-router-dom';
import connectAllprops from '@flux/shared/connect';
import Loader from './Loader';
import React, { RefObject, createRef } from 'react';
import Routes from '../Routes';

type States = {
    interval: number;
    is_loading: boolean;
    error: string;
};

class App extends React.Component<Props, States> {
    private contextRef: RefObject<any>;

    constructor(props: Props) {
        super(props);

        this.state = {
            interval: 0,
            is_loading: true,
            error: '',
        };

        this.contextRef = createRef();
    }

    render(): React.ReactElement<any> {
        const { is_loading, error } = this.state;

        if (is_loading) {
            return <Loader />;
        }

        if (error) {
            return (
                <div ref={this.contextRef}>
                    <Redirect
                        to={{
                            pathname: '/error',
                            state: {
                                message: error,
                            },
                        }}
                    />
                </div>
            );
        }

        return (
            <div ref={this.contextRef}>
                <Routes />
            </div>
        );
    }
}

export default connectAllprops(App);
