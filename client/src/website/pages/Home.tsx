import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '@flux/shared/connect';
import React from 'react';

type States = {};

class Home extends React.Component<Props, States> {
    render(): any {
        const { t, i18n } = this.props;

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
