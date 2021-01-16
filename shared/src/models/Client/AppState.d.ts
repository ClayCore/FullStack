import FabAction from './FabAction';
import User from '../User';
import Translation from '../Translation';
import UserState from './UserState';
import ErrorState from './ErrorState';

export default interface AppState {
    translations: Translation;
    userState: UserState;
    error: ErrorState;
    userDictionary: { [id: string]: User };
    fabActions: FabAction[];
}
