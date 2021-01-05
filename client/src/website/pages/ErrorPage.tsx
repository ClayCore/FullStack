import { ComponentProps as IntlProps } from '@flux/shared/models/ComponentProps';
import connectAllProps from '@flux/shared/connect';
import React from 'react';

type Props = IntlProps & {
    error: string;
};
type States = {};

class ErrorPage extends React.Component<Props, States> {
    render(): any {
        return (
            <div id="page">
                <header>
                    <h1>Error!</h1>
                </header>
                <main>
                    <section>{this.props.error}</section>
                </main>
            </div>
        );
    }
}

export default connectAllProps(ErrorPage);
