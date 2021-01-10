import {
    MapStateToPropsParam,
    MapDispatchToPropsParam,
    connect,
} from 'react-redux';
import { Dispatch, bindActionCreators, Action } from 'redux';
import actions from '@flux/shared/actions';
import ActionCreator from '@flux/shared/Models/Client/ActionCreator';
import { withTranslation } from 'react-i18next';

// Merge all the props to a given state
const mapStateToProps: MapStateToPropsParam<any, any, any> = (
    state: any
): any => {
    return {
        state,
    };
};

// We bind all the dispatch calls to our ActionCreator
const mapDispatchToProps: MapDispatchToPropsParam<ActionCreator, any> = (
    dispatch: Dispatch<Action>
): any => {
    return {
        actions: bindActionCreators(actions as any, dispatch),
    };
};

// and we merge all the props to one object
const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...stateProps, ...dispatchProps, ...ownProps };
};

// which we pass to all components
export default function connectAllProps(Component: React.ComponentClass<any>) {
    return withTranslation('common')(
        connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
    );
}
