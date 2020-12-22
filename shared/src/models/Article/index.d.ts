import Post from '../Post';

export default interface Article extends Post {
    title: string;
    content: string;
}
