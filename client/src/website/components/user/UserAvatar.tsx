import React from 'react';
import User from '@flux/shared/models/User';

type Props = {
    user: User;
};

type State = {};

export default class UserAvatar extends React.Component<Props, State> {
    render(): React.ReactElement<any> {
        return (
            <img
                src={
                    this.props.user.avatarUrl
                        ? this.props.user.avatarUrl
                        : '@flux/assets/images/default_avatar.png'
                }
            ></img>
        );
    }
}
