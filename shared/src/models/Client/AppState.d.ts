import FabAction from './FabAction';
import User from '../User';
import Translation from '../Translation';
import UserState from './UserState';

export default interface AppState {
    translations: Translation;
    userState: UserState;
    userDictionary: { [id: string]: User };
    fabActions: FabAction[];
}
