import { Store, AnyAction } from 'redux';
import { toast, ToastContainerProps } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import AppState from '@flux/shared/models/Client/AppState';

import 'react-toastify/dist/ReactToastify.css';

export default class ToastWrapper {
    private store: Store<AppState, AnyAction>;

    constructor(store: Store<AppState, AnyAction>) {
        this.store = store;

        toast.configure({
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
        } as ToastContainerProps);
    }

    success(message: string): void {
        const { t } = useTranslation();

        let displayText = t(message);
        if (!displayText) {
            displayText = message;
        }

        toast.success(displayText);
    }

    error(message: string): void {
        const { t } = useTranslation();

        let displayText = t(message);
        if (!displayText) {
            displayText = message;
        }
        toast.error(displayText);
    }
}
