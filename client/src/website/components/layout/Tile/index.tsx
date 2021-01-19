import { ComponentProps } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';

type Props = ComponentProps & {
    title: string;
    subtitle: string;
    data?: string;
};
type State = {};

class Tile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { title, subtitle, data, t } = this.props;

        if (data !== undefined) {
            return (
                <section className="tile">
                    <fieldset>
                        <header>{t(title)}</header>
                        <div className="subtitle">{t(subtitle)}:</div>
                        <div className="dataList">{data}</div>
                    </fieldset>
                </section>
            );
        } else {
            return (
                <section className="tile">
                    <fieldset>
                        <header>{t(title)}</header>
                        <div className="subtitle">{t(subtitle)}:</div>
                    </fieldset>
                </section>
            );
        }
    }
}

export default connectAllProps(Tile);
