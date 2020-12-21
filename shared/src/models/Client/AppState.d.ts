import FabAction from './FabAction';
import User from '../User';
import Translation from '../Translation';

export default interface AppState {
    translations: Translation;
    userDictionary: { [id: string]: User };
    fabActions: FabAction[];
}
