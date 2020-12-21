import { version } from '../package.json';

export const APP_VERSION: string = version;

// local storage keys
export const ACCESS_TOKEN_KEY: string = 'accessToken';
export const INVALID_TOKEN_ERROR: string = 'toast.user.invalid_token_error';

export const RESPONSE_CONTENT_TYPE = {
    JSON: 'application/json',
    TEXT: 'text/plain',
    HTML: 'text/html',
};

export const MAX_REGISTRATION_USER: number = 128;
export const DEFAULT_PAGE_SIZE: number = 8;
export const PASSWORD_MIN_LENGTH: number = 8;
export const ARTICLE_CONTENT_MIN_LENGTH: number = 150;
export const ARTICLE_CONTENT_MAX_LENGTH: number = 1000000;
export const ARTICLE_TITLE_MAX_LENGTH: number = 50;
export const THREAD_CONTENT_MAX_LENGTH: number = 1000;
export const THREAD_TITLE_MAX_LENGTH: number = 50;
export const AUTO_COMPLETE_MAX_CANDIDATES: number = 5;

// feature flags
export const FLAG_ENABLE_OTP_FOR_VERIFICATION: boolean = false;
export const FLAG_ENABLE_INVITATION_CODE: boolean = false;
