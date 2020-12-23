import FabAction from './FabAction';
import User from '../User';

export default interface AppState {
    userDictionary: { [id: string]: User };
    fabActions: FabAction[];
}
