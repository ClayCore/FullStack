import FabAction from './FabAction';
import User from '../User';
import Translation from '../Translation';
import UserState from './UserState';
import ErrorState from './ErrorState';
import RedirectTask from './RedirectTask';
import ArticleState from './ArticleState';
import ThreadState from './ThreadState';
import CommentState from './CommentState';

export default interface AppState {
    translations: Translation;
    redirectTask: RedirectTask;
    userState: UserState;
    articleState: ArticleState;
    threadState: ThreadState;
    error: ErrorState;
    userDictionary: { [id: string]: User };
    fabActions: FabAction[];
}
