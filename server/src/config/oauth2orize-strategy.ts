import AccessToken from '@flux/shared/models/OAuth/AccessToken';
import AccessTokenCollection from '@flux/shared/models/OAuth/AccessTokenCollection';
import OAuth2Strategy from 'passport-oauth2';
import User from '@flux/shared/models/User';
import UserCollection from '@flux/shared/models/User/UserCollection';
import UserDocument from '@flux/shared/models/User/UserDocument';

OAuth2Strategy.prototype.userProfile = (
    token: string,
    done: (err?: Error | null, profile?: User) => void
) => {
    AccessTokenCollection.findOne(
        { token: token },
        (error: Error, accessToken: AccessToken): void => {
            if (error || !accessToken) {
                done(error);
            }

            UserCollection.findById(
                accessToken.userId,
                (error: Error, user: UserDocument): void => {
                    if (error || !user) {
                        done(error);
                    }

                    done(undefined, user);
                }
            );
        }
    );
};

export default OAuth2Strategy;
