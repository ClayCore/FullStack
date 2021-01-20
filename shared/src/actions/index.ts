import ActionCreator from '../models/Client/ActionCreator';
import articleActionCreator from './article';
import commonActionCreator from './common';
import notificationActionCreator from './notification';
import threadActionCreator from './thread';
import userActionCreator from './user';

const actions: ActionCreator = {
    ...userActionCreator,
    ...articleActionCreator,
    ...commonActionCreator,
    ...notificationActionCreator,
    ...threadActionCreator,
};

export default actions;
