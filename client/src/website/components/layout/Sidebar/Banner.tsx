import { API_VERSION } from '@flux/shared/routes';
import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import fetch from '@flux/shared/fetch';
import React from 'react';

type State = {
    version?: string;
    error?: Error;
};

class Banner extends React.Component<Props, State> {
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

    render(): React.ReactElement<any> {
        const { version, error } = this.state;

        if (error !== undefined && !version) {
            console.log(`BannerError: ${error}`);
            this.props.actions.forwardError(error as Error);
        }

        return (
            <div id="banner">
                <header>claymore.gg</header>
                <section className="info">Version: {version}</section>
            </div>
        );
    }
}

export default connectAllProps(Banner);
