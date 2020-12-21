export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUid = (length: number): string => {
    let uid: string = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const chars_length = chars.length;

    for (let i = 0; i < length; ++i) {
        uid += chars[getRandomInt(0, chars_length - 1)];
    }

    return uid;
};
