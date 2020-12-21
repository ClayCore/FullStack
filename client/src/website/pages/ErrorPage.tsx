import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { FormattedMessage } from 'react-intl';
import connectAllProps from '@flux/shared/connect';
import React, { Fragment } from 'react';

type ErrorPageProps = Props & {
    error: string;
};
type States = {};

class ErrorPage extends React.Component<ErrorPageProps, States> {
    render(): any {
        return (
            <Fragment>
                <header>
                    <FormattedMessage id="page.about" />
                </header>
                <main>
                    <section>{this.props.error}</section>
                </main>
            </Fragment>
        );
    }
}

export default connectAllProps(ErrorPage);
