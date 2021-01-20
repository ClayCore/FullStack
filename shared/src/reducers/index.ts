import { combineReducers } from 'redux';
import articleState from './article';
import error from './error';
import fabActions from './fabActions';
import redirectTask from './redirectTask';
import threadState from './thread';
import translations from './translations';
import userDictionary from './userDictionary';
import userState from './user';

const reducer = combineReducers({
    userState,
    articleState,
    threadState,
    redirectTask,
    error,
    translations,
    userDictionary,
    fabActions,
});

export default reducer;
