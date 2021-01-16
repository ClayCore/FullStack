import _ from 'lodash';
import ErrorState from '../models/Client/ErrorState';
import { FORWARD_ERROR } from '../actions/common';

const initialState: ErrorState = {
    error: undefined,
};

// TODO: add more translations.
const error = (state: ErrorState = initialState, action: any): ErrorState => {
    switch (action.type) {
        case FORWARD_ERROR:
            return state;
        default:
            return state;
    }
};

export default error;
