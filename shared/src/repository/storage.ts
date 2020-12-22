import { Storage } from './storage.d';
import * as LocalStorage from './local/blob-storage';

let storage: Storage = LocalStorage;
export default storage;

export const CONTAINER_AVATAR: string = 'avatar';
export const CONTAINER_ARTICLE: string = 'article';
export const CONTAINER_THREAD: string = 'thread';
