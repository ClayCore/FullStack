import oauth2orize, {
    OAuth2Server,
    SerializeClientDoneFunction,
    DeserializeClientDoneFunction,
    ExchangeDoneFunction,
} from 'oauth2orize';
import './passport-provider';
import * as random from '../utils/random';
import AccessToken from '@flux/shared/models/OAuth/AccessToken';
import AccessTokenCollection from '@flux/shared/models/OAuth/AccessTokenCollection';
import AuthCode from '@flux/shared/models/OAuth/AuthCode';
import AuthCodeCollection from '@flux/shared/models/OAuth/AuthCodeCollection';
import Client from '@flux/shared/models/OAuth/Client';
import ClientCollection from '@flux/shared/models/OAuth/ClientCollection';
import UserCollection from '@flux/shared/models/User/UserCollection';
import UserDocument from '@flux/shared/models/User/UserDocument';

const server: OAuth2Server = oauth2orize.createServer();

const issueToken = (clientId: string, userId: string, done: (err: Error | null, token?: string) => void): void => {
    console.log(`[Issue Token]`);

    const token = random.getUid(256);
    const accessToken: AccessToken = new AccessTokenCollection({
        token: token,
        clientId: clientId,
        userId: userId,
    });

    accessToken.save((error: Error, accessToken: AccessToken): void => {
        if (error) {
            return done(error, undefined);
        }

        return done(null, accessToken.token);
    });
};

server.serializeClient((client: Client, done: SerializeClientDoneFunction) => done(null, client.id));
server.deserializeClient((id: string, done: DeserializeClientDoneFunction) =>
    done(
        null,
        ClientCollection.find((client: Client) => client.id === id)
    )
);

server.grant(
    oauth2orize.grant.code(
        (
            client: Client,
            redirectUri: string,
            user: UserDocument,
            res: any,
            issued: (err: Error | null, code?: string) => void
        ) => {
            console.log(`[OAuth2orize Grant Code]`);

            const code = random.getUid(16);
            const authCode: AuthCode = new AuthCodeCollection({
                code: code,
                clientId: client.id,
                userId: user.id,
                userName: user.name,
                redirectUri: redirectUri,
            });

            authCode.save((error: Error, authCode: AuthCode): void => {
                if (error) {
                    return issued(error, undefined);
                }

                return issued(null, authCode.code);
            });
        }
    )
);

server.grant(
    oauth2orize.grant.token(
        (
            client: Client,
            user: UserDocument,
            res: any,
            done: (err: Error | null, token?: string, params?: any) => void
        ) => {
            console.log(`[OAuth2orize Grant Token]`);

            issueToken(client.id, user.id, done);
        }
    )
);

server.exchange(
    oauth2orize.exchange.code((client: Client, code: string, redirectUri: string, done: ExchangeDoneFunction) => {
        console.log(`[OAuth2orize Exchange Code]`);

        AuthCodeCollection.findOne({ code: code }, (error: Error, authCode: AuthCode) => {
            if (error) {
                return done(error);
            }

            if (client.id !== authCode.clientId) {
                return done(null, false);
            }

            if (redirectUri !== authCode.redirectUri) {
                return done(null, false);
            }

            issueToken(client.id, authCode.userId, done);
        });
    })
);

server.exchange(
    oauth2orize.exchange.password(
        (client: Client, email: string, password: string, scope: string[], done: ExchangeDoneFunction) => {
            console.log(`[OAuth2orize Exchange Password]`);

            const foundClient: Client | undefined = ClientCollection.find((value: Client) => client.id === value.id);
            if (!foundClient || foundClient.secret !== client.secret) {
                return done(null, false);
            }

            UserCollection.findOne({ email: email.toLowerCase() }, (err: Error, user: UserDocument): void => {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false);
                }

                user.comparePassword(password, (err: Error, isMatch: boolean) => {
                    if (err) {
                        return done(err);
                    }

                    if (!isMatch) {
                        return done(null, false);
                    }

                    issueToken(client.id, user.id, done);
                });
            });
        }
    )
);

server.exchange(
    oauth2orize.exchange.clientCredentials((client: Client, scope: string[], done: ExchangeDoneFunction) => {
        console.log(`[OAuth2orize Exchange Client Credentials]`);

        const foundClient: Client | undefined = ClientCollection.find((value: Client) => client.id === value.id);
        if (!foundClient || foundClient.secret !== client.secret) {
            return done(null, false);
        }

        issueToken(client.id, '', done);
    })
);

export default server;
