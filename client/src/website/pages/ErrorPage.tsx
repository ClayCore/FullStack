import { ComponentProps as IntlProps } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';

type Props = IntlProps & {
    error?: Error;
};
type State = {};

class ErrorPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): any {
        const { error } = this.props;
        const error_name = error?.name;
        const error_body = error?.message;

        return (
            <div id="page">
                <header>
                    <h1>{error ? error_name : 'Error!'}</h1>
                </header>
                <main>
                    <section>{error && error_body}</section>
                </main>
            </div>
        );
    }
}

export default connectAllProps(ErrorPage);
