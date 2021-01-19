import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import Banner from './Banner';
import connectAllProps from '~/utils/connect';
import NavList from './NavList';
import React from 'react';

type State = {};

class Sidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        return (
            <aside id="sidebar">
                <Banner />
                <NavList />
            </aside>
        );
    }
}

export default connectAllProps(Sidebar);
