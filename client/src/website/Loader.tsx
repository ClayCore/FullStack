import React from 'react';
import spinner from '@flux/assets/icons/spinner.svg';

type Props = {};
type State = {};

export default class Loader extends React.Component<Props, State> {
    render(): any {
        return (
            <div id="loader-wrapper">
                <img src={spinner} className="loader"></img>
            </div>
        );
    }
}
