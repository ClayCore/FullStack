import React from 'react';

type Props = {
    children?: React.ReactNode;
};
type States = {};

class Container extends React.Component<Props, States> {
    render(): any {
        return <main id="wrapper">{this.props.children}</main>;
    }
}

export default Container;
