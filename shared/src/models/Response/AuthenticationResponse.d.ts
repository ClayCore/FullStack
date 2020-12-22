import Notification from '../Notification';
import User from '../User';

export default interface AuthenticationResponse {
    user: User;
    accessToken?: string;
    notifications: Notification[];
    others: User[];
}
