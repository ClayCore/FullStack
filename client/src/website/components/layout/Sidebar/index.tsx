import React from 'react';

import NavList from './NavList';
import Banner from './Banner';

type Props = {};
type State = {};

export default class Sidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): any {
        return (
            <aside id="sidebar">
                <Banner />
                <NavList />
            </aside>
        );
    }
}
