import {
    MapStateToPropsParam,
    MapDispatchToPropsParam,
    connect,
} from 'react-redux';
import { Dispatch, bindActionCreators, Action } from 'redux';
import actions from './actions';
import ActionCreator from './models/Client/ActionCreator';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

const mapStateToProps: MapStateToPropsParam<any, any, any> = (
    state: any
): any => {
    return {
        state,
    };
};

const mapDispatchToProps: MapDispatchToPropsParam<ActionCreator, any> = (
    dispatch: Dispatch<Action>
): any => {
    return {
        actions: bindActionCreators(actions as any, dispatch),
    };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...stateProps, ...dispatchProps, ...ownProps };
};

export default function connectAllProps(Component: React.ComponentClass<any>) {
    return withTranslation('common')(
        withRouter(
            connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
        )
    );
}
