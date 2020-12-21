import { BasicStrategy } from 'passport-http';
import { Strategy as BearerStrategy, IVerifyOptions } from 'passport-http-bearer';
import { Strategy as ClientPasswordStrategy } from 'passport-oauth2-client-password';
import { Strategy as LocalStrategy } from 'passport-local';
import AccessToken from '@flux/shared/models/OAuth/AccessToken';
import AccessTokenCollection from '@flux/shared/models/OAuth/AccessTokenCollection';
import Client from '@flux/shared/models/OAuth/Client';
import ClientCollection from '@flux/shared/models/OAuth/ClientCollection';
import passport from 'passport';
import UserCollection from '@flux/shared/models/User/UserCollection';
import UserDocument from '@flux/shared/models/User/UserDocument';

passport.serializeUser<any, any>((user: UserDocument, done: (err: any, id?: any) => void) => {
    done(undefined, user.id);
});

passport.deserializeUser((id: any, done: (err: Error, user: UserDocument) => void) => {
    UserCollection.findById(id, (err: Error, user: UserDocument) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done): void => {
        console.log(`Using [LocalStrategy]. Using [email]:[password]\n\t[${email}]:[${password}]`);

        UserCollection.findOne({ email: email.toLowerCase() }, (err: Error, user: UserDocument): void => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done({ message: 'toast.user.email_not_found' }, false);
            }

            user.comparePassword(password, (err: Error, isMatch: boolean) => {
                if (err) {
                    return done(err);
                }

                if (isMatch) {
                    return done(undefined, user);
                }

                return done({ message: 'toast.user.password_error' }, false);
            });
        });
    })
);

function verifyClient(clientId: string, clientSecret: string, done: (error: Error | undefined, user?: any) => void) {
    console.log(`Using [ClientPasswordStrategy]. Using [clientId]:[clientSecret]\n\t[${clientId}]:[${clientSecret}]`);

    const client: Client | undefined = ClientCollection.find((value: Client) => value.id === clientId);
    if (!client || client.secret !== clientSecret) {
        return done(undefined, false);
    }

    return done(undefined, client);
}

passport.use(new BasicStrategy(verifyClient));
passport.use(new ClientPasswordStrategy(verifyClient));

passport.use(
    new BearerStrategy(
        (
            accessToken: string,
            done: (error: Error | undefined, user?: any, options?: IVerifyOptions | string) => void
        ) => {
            console.log(`Using [BearerStrategy]. Using [accessToken]\n\t[${accessToken}]`);

            AccessTokenCollection.findOne({ token: accessToken }, (error: Error, token: AccessToken): void => {
                if (error) {
                    return done(error);
                }

                if (!token) {
                    return done(undefined, false);
                }

                if (token.userId) {
                    UserCollection.findById(token.userId, (error: Error, user: UserDocument) => {
                        if (error) {
                            return done(error);
                        }

                        if (!user) {
                            return done(undefined, false);
                        }

                        done(undefined, user, { scope: 'all', message: 'success' });
                    });
                } else {
                    const client: Client | undefined = ClientCollection.find(
                        (value: Client) => value.id === token.clientId
                    );

                    if (!client) {
                        return done(undefined, false);
                    }

                    done(undefined, client, { scope: 'all', message: 'success' });
                }
            });
        }
    )
);
