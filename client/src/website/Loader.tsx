import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import connectAllProps from '@flux/shared/connect';
import React from 'react';
import spinner from '@flux/assets/icons/spinner.svg';

type States = {};

class Loader extends React.Component<Props, States> {
    render(): any {
        return (
            <div id="loader-wrapper">
                <img src={spinner} className="loader"></img>
            </div>
        );
    }
}

export default connectAllProps(Loader);
