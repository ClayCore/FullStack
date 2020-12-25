import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {};
type States = {};

export default class Home extends React.Component<Props, States> {
    render(): any {
        return (
            <Fragment>
                <header>
                    <FormattedMessage id="page.about" />
                </header>
                <main>
                    <section>
                        <FormattedMessage id="page.about.introduction" />
                    </section>
                </main>
            </Fragment>
        );
    }
}
