import React from 'react';
import { Redirect } from 'react-router';
import { getUid } from '@flux/shared/utils/random';
import { IonIcon } from '@ionic/react';
import { Link as Anchor } from 'react-router-dom';

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

        if (!this.links || !links) {
            let errorMsg = 'Failed to generate links...';
            return (
                <Redirect
                    to={{ pathname: '/error', state: { errorMsg: errorMsg } }}
                />
            );
        }

        return (
            <nav>
                {links?.map((link: Link) => (
                    <div key={getUid(16)} className="link">
                        <IonIcon icon={link?.icon} />
                        <Anchor to={link.target}>{link?.label}</Anchor>
                    </div>
                ))}
            </nav>
        );
    }
}
