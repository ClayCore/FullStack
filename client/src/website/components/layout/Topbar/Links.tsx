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
        const { t } = this.props;
        let linkTypes: Array<any> = [
            { target: '/signup', label: t('page.me.sign_up') },
            { target: '/login', label: t('page.me.login') },
        ];
        let links = generateLinks(linkTypes);

        return links;
    };

    render(): React.ReactElement<any> {
        return <nav>{this.getNav()}</nav>;
    }
}

export default connectAllProps(Links);
