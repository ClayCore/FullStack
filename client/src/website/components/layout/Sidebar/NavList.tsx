import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { getUid } from '@flux/shared/utils/random';
import connectAllProps from '~/utils/connect';
import Link from '../Link';
import React from 'react';

type State = {};

class NavList extends React.Component<Props, State> {
    private links?: Array<React.ReactNode>;

    constructor(props: Props) {
        super(props);

        this.links = this.generateLinks();
    }

    generateLinks = (): Array<React.ReactNode> => {
        let links: Array<React.ReactNode> = [
            <Link target="/home" label="Home" icon="home" key={getUid(16)} />,
            <Link
                target="/article"
                label="Articles"
                icon="book"
                key={getUid(16)}
            />,
            <Link
                target="/about"
                label="About"
                icon="information-circle"
                key={getUid(16)}
            />,
        ];

        return links;
    };

    render(): React.ReactElement<any> {
        const links = this.links;

        if (!links) {
            const error: Error = {
                name: 'Client-side render failed.',
                message: 'Failed to generate links.',
            };
            this.props.actions.forwardError(error);
        }

        return <nav>{links}</nav>;
    }
}

export default connectAllProps(NavList);
