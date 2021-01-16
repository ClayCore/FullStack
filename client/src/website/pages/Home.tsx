import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';

type State = {};

class Home extends React.Component<Props, State> {
    render(): any {
        const { t } = this.props;

        return (
            <div id="page">
                <header>{t('page.about.title')}</header>
                <main>
                    <section>{t('page.about.introduction')}</section>
                </main>
            </div>
        );
    }
}

export default connectAllProps(Home);
