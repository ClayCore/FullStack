import { ComponentProps } from '@flux/shared/models/ComponentProps';
import { getUid } from '@flux/shared/utils/random';
import { Link as Anchor } from 'react-router-dom';
import connectAllProps from '~/utils/connect';
import Icon from '~/website/components/layout/Icon';
import React from 'react';

type Props = ComponentProps & {
    target: string;
    label?: string;
    icon?: string;
    desc?: string;
};
type State = {};

class Link extends React.Component<Props, State> {
    public links?: Array<React.ReactNode>;

    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { icon, target, label } = this.props;

        if (!icon && label) {
            return (
                <Anchor to={target} className="link">
                    {label}
                </Anchor>
            );
        }

        if (!label && icon) {
            return (
                <Anchor to={target} className="link">
                    <Icon icon={icon} />
                </Anchor>
            );
        }

        return (
            <Anchor to={target} className="link">
                <Icon icon={icon} />
                {label}
            </Anchor>
        );
    }
}

export function generateLinks(args: Array<Props>) {
    let links: Array<React.ReactNode> = [];
    args.forEach((arg: Props) => {
        let label: string | undefined = undefined;
        if (arg.label) {
            label = arg.label;
        }

        let icon_tag = undefined;
        if (arg.icon) {
            icon_tag = arg.icon;
        }

        let link = React.createElement(connectAllProps(Link), {
            target: arg.target,
            label: label ? label : undefined,
            icon: icon_tag ? icon_tag : undefined,
            key: getUid(16),
        });
        links.push(link);
    });

    return links;
}

export default connectAllProps(Link);
