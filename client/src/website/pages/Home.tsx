import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import Footer from '../components/layout/Footer';
import Tile from '../components/layout/Tile';
import React from 'react';

type State = {};

class Home extends React.Component<Props, State> {
    render(): any {
        const { t } = this.props;

        return (
            <div id="page">
                <header>{t('page.home.header')}</header>
                <main>
                    <Tile
                        title="page.home.articles"
                        subtitle="page.home.recently"
                    />
                    <Tile
                        title="page.home.projects"
                        subtitle="page.home.recently"
                    />
                    <Tile
                        title="page.home.music"
                        subtitle="page.home.recently"
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default connectAllProps(Home);
