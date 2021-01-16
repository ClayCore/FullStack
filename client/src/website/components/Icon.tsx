import React from 'react';
import ErrorPage from '../pages/ErrorPage';

type Props = {
    icon?: string;
};
type State = {};

export default class Icon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { icon } = this.props;

        if (icon) {
            return React.createElement('ion-icon', { icon: icon });
        }

        const error: Error = {
            name: 'Client-side render failed',
            message: 'Could not render icon.',
        };

        return <ErrorPage error={error} />;
    }
}
