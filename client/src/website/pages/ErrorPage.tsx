import React, { Fragment } from 'react';

type Props = {
    error: string;
};
type States = {};

export default class ErrorPage extends React.Component<Props, States> {
    render(): any {
        return (
            <Fragment>
                <header>
                    <h1>Error!</h1>
                </header>
                <main>
                    <section>{this.props.error}</section>
                </main>
            </Fragment>
        );
    }
}
