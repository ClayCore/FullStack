import { ComponentProps } from '@flux/shared/models/ComponentProps';
import React from 'react';
import connectAllProps from '~/utils/connect';

type Props = ComponentProps & {
    icon?: string;
};
type State = {};

class Icon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { icon } = this.props;

        if (icon) {
            return React.createElement('ion-icon', { icon: icon });
        } else {
            const error: Error = {
                name: 'Client-side render failed',
                message: 'Could not render icon.',
            };
            this.props.actions.forwardError(error);

            return <div></div>;
        }
    }
}

export default connectAllProps(Icon);
