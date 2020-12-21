import { WrappedComponentProps as IntlProps } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import ActionCreator from './Client/ActionCreator';
import AppState from './Client/AppState';

export interface ComponentProps extends IntlProps, RouteComponentProps<any> {
    state: AppState;
    actions: ActionCreator;
}
