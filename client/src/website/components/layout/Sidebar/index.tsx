import React from 'react';
import fetch from '@flux/shared/fetch';
import { API_VERSION } from '@flux/shared/routes';
import { Redirect } from 'react-router';

type Props = {};
type State = {
    version: string | null;
    error: string | null;
};

export default class Sidebar extends React.Component<Props, State> {
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
            <Redirect
                to={{ pathname: '/error', state: { errorMsg: error } }}
            />;
        }

        return (
            <aside id="sidebar">
                <div className="info">Version: {version}</div>
            </aside>
        );
    }
}
