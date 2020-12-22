import Notification from '../Notification';
import User from '../User';

export default interface UserState {
    currentUser: User | undefined;
    loading: boolean;
    uploadingAvatar: boolean;
    uploadedAvatarUrl: string | undefined;
    notifications: Notification[];
    sendOtpCoolDown: number;
}
