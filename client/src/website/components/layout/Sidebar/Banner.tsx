import React from 'react';
import fetch from '@flux/shared/fetch';
import { API_VERSION } from '@flux/shared/routes';
import { Redirect } from 'react-router';
import ErrorPage from '~/website/pages/ErrorPage';

type Props = {};
type State = {
    version?: string;
    error?: Error;
};

export default class Banner extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            version: undefined,
            error: undefined,
        };
    }

    getVersion = () => {
        fetch(API_VERSION, undefined, 'GET').then((json: any) => {
            if (json && json.version) {
                this.setState({ version: json.version });
            } else {
                const error: Error = {
                    name: 'Server-Client connection refused.',
                    message: 'Failed to fetch app version from server.',
                };
                this.setState({
                    error: error,
                });
            }
        });
    };

    componentDidMount = () => {
        this.getVersion();
    };

    render(): any {
        const { version, error } = this.state;

        if (error || !version) {
            return <ErrorPage error={error} />;
        }

        return (
            <div id="banner">
                <header>claymore.gg</header>
                <section className="info">Version: {version}</section>
            </div>
        );
    }
}
