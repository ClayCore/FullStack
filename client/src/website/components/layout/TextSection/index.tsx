import { ComponentProps } from '@flux/shared/models/ComponentProps';
import connectAllProps from '~/utils/connect';
import React from 'react';

type Props = ComponentProps & {
    heading: string;
    body: string;
};
type State = {};

class TextSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        const { heading, body, t } = this.props;

        return (
            <section className="text-section">
                <header className="text-heading">{t(heading)}</header>
                <article>{t(body)}</article>
            </section>
        );
    }
}

export default connectAllProps(TextSection);
