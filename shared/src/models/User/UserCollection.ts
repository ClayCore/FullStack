import { getBlobNameFromUrl } from '../../repository/utils';
import bcrypt from 'bcrypt';
import mongoose, { Model, Schema } from 'mongoose';
import storage, { CONTAINER_AVATAR } from '../../repository/storage';
import UserDocument, { ComparePasswordFunction } from './UserDocument';

export const userSchema: Schema = new mongoose.Schema(
    {
        email: { type: String, unique: true },
        password: String,
        name: { type: String, unique: true },
        gender: String,
        address: String,
        website: String,
        avatarUrl: String,
        preferences: {
            type: Map,
            of: String,
        },
        OTP: String,
        otpExpireTime: Date,
        invitationCode: String,
    },
    { timestamps: true }
);

userSchema.pre('save', function save(next: any) {
    const user: any = this;

    if (user && user.email) {
        user.email = user.email.toLowerCase();
    }

    if (user && user.avatarUrl) {
        const sasAvatarUrl: string = user.avatarUrl;
        user.avatarUrl = sasAvatarUrl.substring(0, sasAvatarUrl.indexOf('?'));
    }

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err: any, salt: any) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(
            user.password as string,
            salt,
            (err: mongoose.Error, hash: any) => {
                if (err) {
                    return next(err);
                }

                user.password = hash;
                next();
            }
        );
    });
});

export const postFind = (user: UserDocument, next?: any) => {
    // Add signing params for Avatar Url so that client can consume
    if (user && user.avatarUrl) {
        const avatarFilename: string = getBlobNameFromUrl(user.avatarUrl);
        user.avatarUrl = `${user.avatarUrl}?${storage.generateSigningUrlParams(
            CONTAINER_AVATAR,
            avatarFilename
        )}`;
    }

    if (next) {
        next();
    }
};

userSchema.post('findOne', postFind);

const comparePassword: ComparePasswordFunction = function (
    this: any,
    candidatePassword: string,
    cb: (err: mongoose.Error, isMatch: boolean) => void
) {
    bcrypt.compare(
        candidatePassword,
        this.password,
        (err: mongoose.Error, isMatch: boolean) => {
            cb(err, isMatch);
        }
    );
};

userSchema.methods.comparePassword = comparePassword;

const UserCollection: Model<UserDocument> = mongoose.model('User', userSchema);

export default UserCollection;
