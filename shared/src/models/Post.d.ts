import { UnifiedModel } from './UnifiedModel';

export default interface Post extends UnifiedModel {
    readonly author: string;
    readonly likes: string[];
    readonly commentsCount: number;
    readonly lastCommentedAt: string;
    readonly lastCommentedBy: string;
}
