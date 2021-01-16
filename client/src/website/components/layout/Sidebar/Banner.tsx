import React from 'react';
import fetch from '@flux/shared/fetch';
import { API_VERSION } from '@flux/shared/routes';
import { Redirect } from 'react-router';

type Props = {};
type State = {
    version: string | null;
    error: string | null;
};

export default class Banner extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            version: null,
            error: null,
        };
    }

    getVersion = () => {
        fetch(API_VERSION, undefined, 'GET').then((json: any) => {
            if (json && json.version) {
                this.setState({ version: json.version });
            } else {
                this.setState({
                    error: 'Failed to fetch app version from server. ',
                });
            }
        });
    };

    componentDidMount = () => {
        this.getVersion();
    };

    render(): any {
        const { version, error } = this.state;

        if (error && !version) {
            return (
                <Redirect
                    to={{ pathname: '/error', state: { errorMsg: error } }}
                />
            );
        }

        return (
            <div id="banner">
                <header>claymore.gg</header>
                <section className="info">Version: {version}</section>
            </div>
        );
    }
}
