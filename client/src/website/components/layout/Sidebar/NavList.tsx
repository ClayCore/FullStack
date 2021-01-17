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
        let linkTypes: Array<any> = [
            { target: '/home', label: 'Home', icon: 'home' },
            { target: '/article', label: 'Articles', icon: 'book' },
            { target: '/about', label: 'About', icon: 'information-circle' },
        ];
        let links = generateLinks(linkTypes);

        return links;
    };

    render(): React.ReactElement<any> {
        return <nav>{this.getNav()}</nav>;
    }
}

export default connectAllProps(NavList);
