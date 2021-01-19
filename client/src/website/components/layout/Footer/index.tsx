import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';

type State = {};

class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { t } = this.props;
        return <footer>{t('app.footer')}</footer>;
    }
}

export default connectAllProps(Footer);
