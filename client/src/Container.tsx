import React from 'react';
import connectAllProps from '@flux/shared/connect';
import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';

type WrapperProps = Props & {
    children?: React.ReactNode;
};
type States = {};

class Container extends React.Component<WrapperProps, States> {
    render(): any {
        return <main id="wrapper">{this.props.children}</main>;
    }
}

export default connectAllProps(Container);
