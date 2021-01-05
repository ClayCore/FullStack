// import { WrappedComponentProps as IntlProps } from 'react-intl';
import { TFunction } from 'react-i18next';
import { i18n } from 'i18next';
import { RouteComponentProps } from 'react-router';
import ActionCreator from './Client/ActionCreator';
import AppState from './Client/AppState';

type IntlProps = {
    t: TFunction;
    i18n: i18n;
};
export interface ComponentProps extends IntlProps, RouteComponentProps<any> {
    state: AppState;
    actions: ActionCreator;
}
