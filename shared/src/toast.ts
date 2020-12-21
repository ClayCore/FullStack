import ToastInterface from './models/Client/Toast';

let toast: ToastInterface = {
    success: (message: string) => {},
    error: (message: string) => {},
};

export const initToast = (toastImplementation: ToastInterface): void => {
    toast = toastImplementation;
};

export const getToast = (): ToastInterface => {
    return toast;
};
