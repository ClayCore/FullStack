import { ComponentProps as IntlProps } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';
import { Location } from 'history';

type LocationProps = Location<State>;
type Props = IntlProps & {
    location: LocationProps;
    error: string;
};
type State = {
    errorMsg: string;
};

class ErrorPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): any {
        const errorMsg: string = this.props.location.state.errorMsg;
        const { error } = this.props;

        if (errorMsg && !error) {
            <div id="page">
                <header>
                    <h1>Error!</h1>
                </header>
                <main>
                    <section>{errorMsg}</section>
                </main>
            </div>;
        }

        return (
            <div id="page">
                <header>
                    <h1>Error!</h1>
                </header>
                <main>
                    <section>{this.props.error}</section>
                </main>
            </div>
        );
    }
}

export default connectAllProps(ErrorPage);
