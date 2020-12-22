import Article from '../Article';
import User from '../User';

export default interface ArticleResponse {
    data: Article[];
    authors: { [id: string]: User };
    hasMore: boolean;
}
