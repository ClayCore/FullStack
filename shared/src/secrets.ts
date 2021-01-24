import dotenv from 'dotenv';
import {
    HOSTURL_PROD,
    HOSTURL_DEV,
    SERVERPORT_DEV,
    SERVERPORT_PROD,
    HOSTNAME_PROD,
    HOSTNAME_DEV,
} from './hostUrls';

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production';

if (prod) {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
}

export const SESSION_SECRET = process.env.SESSION_SECRET;
export const MONGODB_URI = process.env.MONGODB_URI;

if (!SESSION_SECRET) {
    console.error('No client secret. Set SESSION_SECRET environment variable.');
    process.exit(1);
}

if (!MONGODB_URI) {
    console.error(
        'No mongo connection string. Set MONGODB_URI environment variable.'
    );
    process.exit(1);
}

let url: string;
let server_port: number;
let origin: string;
if (prod) {
    url = HOSTURL_PROD;
    server_port = SERVERPORT_PROD;
    origin = HOSTNAME_PROD;
} else {
    url = HOSTNAME_DEV;
    server_port = SERVERPORT_DEV;
    origin = HOSTNAME_DEV;
}

export const HOST_URL = url;
export const SERVER_PORT = server_port;
export const ORIGIN_URI = origin;
