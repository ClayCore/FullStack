import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ComponentProps as Props } from '@flux/shared/models/ComponentProps';
import Notification from '@flux/shared/models/Notification';
import PostType from '@flux/shared/models/PostType';
import InteractionType from '@flux/shared/models/InteractionType';
import connectAllProps from '~/utils/connect';
import Loader from '../Loader';
import User from '@flux/shared/models/User';

type State = {
    loadedAll: boolean;
};

class Notifications extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            loadedAll: false,
        };
    }

    private getEventMessage = (
        notification: Notification
    ): React.ReactElement<any> => {
        const { t } = this.props;

        switch (notification.event) {
            case InteractionType.COMMENT:
                return <span>{t('page.notification.event_comment')}</span>;
            case InteractionType.LIKE:
                return <span>{t('page.notification.event_like')}</span>;
            case InteractionType.DISLIKE:
                return <span>{t('page.notification.event_dislike')}</span>;
            case InteractionType.MENTION:
                return <span>{t('page.notification.event_mention')}</span>;
            default:
                return <span />;
        }
    };

    private getObjectMessage = (
        notification: Notification
    ): React.ReactElement<any> => {
        const { t } = this.props;
        let objectMessageId: string;
        const title: string = notification.objectText;

        switch (notification.objectType) {
            case PostType.ARTICLE:
                objectMessageId = 'page.notification.object_article';
                break;
            case PostType.THREAD:
                objectMessageId = 'page.notification.object_thread';
                break;
            case PostType.COMMENT:
                objectMessageId = 'page.notification.object_comment';
                break;
            default:
                return <span />;
        }

        return (
            <Link
                to={notification.link}
                onClick={() => {
                    this.props.actions.acknowledgeNotification(
                        notification._id
                    );
                }}
            >
                {t(objectMessageId)}
                {title ? `: ${title}` : undefined}
            </Link>
        );
    };

    private renderEmptyNotification = (): React.ReactElement<any> => {
        const { t } = this.props;

        return <div className="message">{t('page.notification.empty')}</div>;
    };

    private renderMessage = (
        notification: Notification
    ): React.ReactElement<any> | undefined => {
        const { t } = this.props;

        const subject: User = this.props.state.userDictionary[
            notification.subject
        ];
        if (!subject) {
            return undefined;
        }

        return (
            <div className="message">
                {/* <UserAvatar user={subject} /> */}
                <span>
                    <b>{subject.name}</b>
                    {this.getEventMessage(notification)}
                    {this.getObjectMessage(notification)}
                </span>
                {notification.acknowledged ? undefined : (
                    <div
                        className="button"
                        onClick={() => {
                            this.props.actions.acknowledgeNotification(
                                notification._id
                            );
                        }}
                    >
                        {t('page.notification.set_as_read')}
                    </div>
                )}
            </div>
        );
    };

    private renderLoader = (loading: boolean): React.ReactElement<any> => {
        return <Loader />;
    };

    private loadMore = (): void => {
        this.props.actions.getAllNotifications();
        this.setState({ loadedAll: true });
    };

    private renderLoadAll = (): React.ReactElement<any> | undefined => {
        const loading: boolean | undefined = this.props.state.userState.loading;
        if (loading) {
            return this.renderLoader(true);
        } else {
            if (!this.state.loadedAll) {
                return this.renderLoader(false);
            } else if (this.props.state.userState.notifications.length > 0) {
                return (
                    <Redirect
                        to={{
                            pathname: '/error',
                            state: { errorMsg: 'No notifications fetched' },
                        }}
                    />
                );
            } else {
                return undefined;
            }
        }
    };

    render(): React.ReactElement<any> {
        if (this.props.state.userState.currentUser) {
            return (
                <div className="notification">
                    {this.props.state.userState.notifications.length > 0
                        ? this.props.state.userState.notifications.map(
                              this.renderMessage
                          )
                        : this.renderEmptyNotification()}
                    {this.renderLoadAll()}
                </div>
            );
        } else {
            return <Redirect to="login" />;
        }
    }
}

export default connectAllProps(Notifications);
