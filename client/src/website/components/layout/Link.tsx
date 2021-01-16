import { ComponentProps } from '@flux/shared/models/ComponentProps';
import { Link as Anchor } from 'react-router-dom';
import connectAllProps from '~/utils/connect';
import Icon from '~/website/components/layout/Icon';
import React from 'react';

type Props = ComponentProps & {
    target: string;
    label: string;
    icon?: string;
    desc?: string;
};
type State = {};

class Link extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { icon, target, label } = this.props;
        return (
            <div className="link">
                <Icon icon={icon} />
                <Anchor to={target}>{label}</Anchor>
            </div>
        );
    }
}

export default connectAllProps(Link);
