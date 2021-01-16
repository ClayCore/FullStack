import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import React from 'react';
import connectAllProps from '~/utils/connect';

type State = {};

class Topbar extends React.Component<Props, State> {
    render(): any {
        return <div id="topbar">This is a topbar</div>;
    }
}

export default connectAllProps(Topbar);
