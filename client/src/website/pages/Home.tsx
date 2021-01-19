import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import Footer from '../components/layout/Footer';
import React from 'react';

type State = {};

class Home extends React.Component<Props, State> {
    render(): any {
        const { t } = this.props;

        return (
            <div id="page">
                <header>{t('page.home.header')}</header>
                <main>
                    <section className="tile">
                        <fieldset>
                            <header>{t('page.home.articles')}</header>
                            <div>{t('page.home.recently')}:</div>
                        </fieldset>
                    </section>
                    <section className="tile">
                        <fieldset>
                            <header>{t('page.home.projects')}</header>
                            <div>{t('page.home.recently')}:</div>
                        </fieldset>
                    </section>
                    <section className="tile">
                        <fieldset>
                            <header>{t('page.home.music')}</header>
                            <div>{t('page.home.recently')}:</div>
                        </fieldset>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default connectAllProps(Home);
