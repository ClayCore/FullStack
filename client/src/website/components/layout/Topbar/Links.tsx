import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { generateLinks } from '../Link';
import connectAllProps from '~/utils/connect';
import React from 'react';

type State = {};

class Links extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getNav = (): Array<React.ReactNode> => {
        let linkTypes: Array<any> = [
            { target: '/register', label: 'Register' },
            { target: '/login', label: 'Login' },
        ];
        let links = generateLinks(linkTypes);

        return links;
    };

    render(): React.ReactElement<any> {
        return <nav>{this.getNav()}</nav>;
    }
}

export default connectAllProps(Links);
