import { ComponentProps } from '@flux/shared/models/ComponentProps';
import Article from '@flux/shared/models/Article';
import connectAllProps from '~/utils/connect';
import React from 'react';

type Props = ComponentProps & {
    title: string;
    subtitle: string;
    data?: Article[];
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
                        <div className="dataList">
                            {data.map((value: Article) => {
                                value;
                            })}
                        </div>
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
