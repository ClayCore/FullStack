import User from '../User';
import Thread from '../Thread';

export default interface ThreadState {
    loading: boolean;
    valid: boolean;
    data: Thread[];
    pageIndex: number;
    totalCount: number;
}
