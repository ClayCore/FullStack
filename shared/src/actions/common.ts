import { AnyAction as Action } from 'redux';
import { getToast as toast } from '../toast';
import { INVALID_TOKEN_ERROR } from '../constants';
import CommonActionCreator from '../models/Client/CommonActionCreator';
import EnUS from '../translations/en-us';
import FabAction from '../models/Client/FabAction';
import moment from 'moment';

export const RESET_REDIRECT: string = 'RESET_REDIRECT';
export const SET_LOCALE: string = 'SET_LOCALE';
export const SET_FAB_ACTIONS: string = 'SET_FAB_ACTIONS';
export const ADD_FAB_ACTION: string = 'ADD_FAB_ACTION';
export const REMOVE_FAB_ACTION: string = 'REMOVE_FAB_ACTION';
export const FORWARD_ERROR: string = 'FORWARD_ERROR';

const actions: CommonActionCreator = {
    handleFetchError(type: string, error: Error): Action {
        if (error.message === INVALID_TOKEN_ERROR) {
            // Suppress not logged-in error.
            return { type };
        }

        if (error.message === EnUS.messages['app.connect_error']) {
            // Hijack "failed to fetch"
            toast().error('app.connect_error');
        } else if (error.message) {
            toast().error(error.message);
        } else if (error.name) {
            toast().error(error.name);
        }

        return { type };
    },
    forwardError(error: Error): Action {
        if (error.message) {
            toast().error(error.message);
        } else if (error.name) {
            toast().error(error.name);
        }

        return {
            type: FORWARD_ERROR,
        };
    },
    resetRedirectTask(): Action {
        return {
            type: RESET_REDIRECT,
        };
    },
    setLocale(locale: string): Action {
        moment.locale(locale);
        return {
            type: SET_LOCALE,
            locale: locale,
        };
    },
    setFabActions(fabActions: FabAction[]): Action {
        return {
            type: SET_FAB_ACTIONS,
            fabActions: fabActions,
        };
    },
    addFabAction(fabAction: FabAction): Action {
        return {
            type: ADD_FAB_ACTION,
            fabAction: fabAction,
        };
    },
    removeFabAction(iconName: string): Action {
        return {
            type: REMOVE_FAB_ACTION,
            iconName: iconName,
        };
    },
};

export default actions;
