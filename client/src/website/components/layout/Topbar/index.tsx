import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import { DateTime } from 'luxon';
import connectAllProps from '~/utils/connect';
import Links from './Links';
import React from 'react';

type State = {};

class Topbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getTime = (): string => {
        const format = 'HH:mm yyyy-MM-dd';
        let now = DateTime.local().toFormat(format);

        return now;
    };

    render(): React.ReactElement<any> {
        return (
            <div id="topbar">
                <span className="clock">{this.getTime()}</span>
                {/* separator? */}
                <Links />
            </div>
        );
    }
}

export default connectAllProps(Topbar);
