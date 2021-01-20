import Thread from '../Thread';
import User from '../User';

export default interface ThreadResponse {
    data: Thread[];
    totalCount: number;
}
