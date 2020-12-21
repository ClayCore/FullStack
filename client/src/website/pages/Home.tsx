import React, { Fragment } from 'react';
import connectAllProps from '@flux/shared/connect';
import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { FormattedMessage } from 'react-intl';

type States = {};

class Home extends React.Component<Props, States> {
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

export default connectAllProps(Home);
