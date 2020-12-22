import Article from '../Article';
import ArticleCache from './ArticleCache';
import User from '../User';

export default interface ArticleState {
    loading: boolean;
    valid: boolean;
    data: Article[]; // All loaded articles
    loadingMore: boolean;
    hasMore: boolean;
    editCache: { [id: string]: ArticleCache };
}
