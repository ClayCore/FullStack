import ArticleActionCreator from './ArticleActionCreator';
import CommonActionCreator from './CommonActionCreator';
import NotificationActionCreator from './NotificationActionCreator';
import UserActionCreator from './UserActionCreator';

export default interface ActionCreator
    extends CommonActionCreator,
        UserActionCreator,
        ArticleActionCreator,
        NotificationActionCreator {}
