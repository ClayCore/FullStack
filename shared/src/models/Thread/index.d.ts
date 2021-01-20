import Post from '../Post';

export default interface Thread extends Post {
    title: string;
    content: string;
    removedEternally: boolean;
}
