import mongoose from 'mongoose';
import Notification from '../Notification';
export default interface NotificationDocument
    extends Notification,
        mongoose.Document {}
