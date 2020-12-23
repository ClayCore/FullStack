import React from 'react';

type Props = {
    children?: React.ReactNode;
};
type States = {};

export default class Container extends React.Component<Props, States> {
    render(): any {
        return <main id="wrapper">{this.props.children}</main>;
    }
}
