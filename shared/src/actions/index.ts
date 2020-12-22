import ActionCreator from '../models/Client/ActionCreator';
import commonActionCreator from './common';
import articleActionCreator from './article';
import userActionCreator from './user';
import notificationActionCreator from './notification';

const actions: ActionCreator = {
    ...userActionCreator,
    ...articleActionCreator,
    ...commonActionCreator,
    ...notificationActionCreator,
};

export default actions;
