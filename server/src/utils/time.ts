export const getExpireTime = (minute: number): Date => {
    const expireTime = new Date(Date.now());
    expireTime.setMinutes(expireTime.getMinutes() + minute);

    return expireTime;
};
