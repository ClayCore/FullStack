import React from 'react';
import { getUid } from '@flux/shared/utils/random';
import { Link as Anchor } from 'react-router-dom';
import Icon from '~/website/components/Icon';
import ErrorPage from '~/website/pages/ErrorPage';

type Props = {};
type State = {};
type Link = {
    target: string;
    label?: string;
    desc?: string;
    icon?: string;
};

export default class NavList extends React.Component<Props, State> {
    private links: Array<Link> | null;

    constructor(props: Props) {
        super(props);

        this.links = this.generateLinks();
    }

    generateLinks = (): Array<Link> => {
        let links: Array<Link> = [
            { target: '/home', label: 'Home', icon: 'home' },
            { target: '/article', label: 'Articles', icon: 'book' },
            { target: '/about', label: 'About', icon: 'information-circle' },
        ];

        return links;
    };

    render(): any {
        const links = this.links;

        if (!links) {
            const error: Error = {
                name: 'Client-side render failed.',
                message: 'Failed to generate links.',
            };
            return <ErrorPage error={error} />;
        }

        return (
            <nav>
                {links.map((link: Link) => (
                    <div key={getUid(16)} className="link">
                        <Icon icon={link?.icon} />
                        <Anchor to={link.target}>{link?.label}</Anchor>
                    </div>
                ))}
            </nav>
        );
    }
}
