import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import Footer from '../components/layout/Footer';
import TextSection from '../components/layout/TextSection';
import React from 'react';

type State = {};

class Home extends React.Component<Props, State> {
    render(): any {
        const { t } = this.props;

        return (
            <div id="page">
                <header>{t('page.about.title')}</header>
                <main>
                    <TextSection
                        heading="page.about.introduction"
                        body="page.about.learn_more"
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default connectAllProps(Home);
