import mongoose from 'mongoose';
import User from '../User';

export default interface UserDocument extends User, mongoose.Document {
    comparePassword: ComparePasswordFunction;
    OTP?: string;
    otpExpireTime?: Date;
    invitationCode?: string;
}

export type ComparePasswordFunction = (
    candidatePassword: string,
    cb: (err: mongoose.Error, isMatch: boolean) => void
) => void;
