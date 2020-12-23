import _ from 'lodash';
import { VerifyCallback } from 'passport-oauth2';
import Client from '@flux/shared/models/OAuth/Client';
import Clients from '@flux/shared/models/OAuth/ClientCollection';
import OAuth2Strategy from './oauth2orize-strategy';
import passport from 'passport';
import User from '@flux/shared/models/User';

const client: Client = Clients[0];
passport.use(
    'oauth2',
    new OAuth2Strategy(
        {
            authorizationURL: `${client.hostUrl}/oauth2/authorize`,
            tokenURL: `${client.hostUrl}/oauth2/token`,
            clientID: client.id,
            clientSecret: client.secret,
            callbackURL: client.redirectUri,
        },
        (
            accessToken: string,
            refreshToken: string,
            user: User,
            verified: VerifyCallback
        ) => {
            console.log(
                `Using [OAuth2Strategy]. Using [accessToken]:[user]\n\t[${accessToken}][${JSON.stringify(
                    user
                )}]`
            );

            verified(undefined, user, { accessToken: accessToken });
        }
    )
);
