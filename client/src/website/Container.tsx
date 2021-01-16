import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';

type Props = {
    children?: React.ReactNode;
};
type State = {};

export default class Container extends React.Component<Props, State> {
    render(): any {
        return (
            <main id="wrapper">
                <Sidebar />
                <div>
                    <Topbar />
                    {this.props.children}
                </div>
            </main>
        );
    }
}
