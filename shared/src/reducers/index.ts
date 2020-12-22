import { combineReducers } from 'redux';
import userState from './user';
import articleState from './article';
import translations from './translations';
import userDictionary from './userDictionary';
import fabActions from './fabActions';

const reducer = combineReducers({
    userState,
    articleState,
    translations,
    userDictionary,
    fabActions,
});

export default reducer;
