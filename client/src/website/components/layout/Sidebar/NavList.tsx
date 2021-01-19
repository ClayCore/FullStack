import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { generateLinks } from '../Link';
import connectAllProps from '~/utils/connect';
import React from 'react';

type State = {};

class NavList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getNav = (): Array<React.ReactNode> => {
        const { t } = this.props;
        let linkTypes: Array<any> = [
            { target: '/home', label: t('page.home.title'), icon: 'home' },
            {
                target: '/article',
                label: t('page.article.title'),
                icon: 'book',
            },
            {
                target: '/about',
                label: t('page.about.title'),
                icon: 'information-circle',
            },
        ];
        let links = generateLinks(linkTypes);

        return links;
    };

    render(): React.ReactElement<any> {
        return <nav>{this.getNav()}</nav>;
    }
}

export default connectAllProps(NavList);
