import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
    error: string;
};
type States = {};

class ErrorPage extends React.Component<Props, States> {
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

export default ErrorPage;
