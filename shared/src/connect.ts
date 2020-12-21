import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { Dispatch, bindActionCreators, Action } from 'redux';
import actions from './actions';
import ActionCreator from './models/Client/ActionCreator';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';

const mapStateToProps: MapStateToPropsParam<any, any, any> = (state: any): any => {
    return {
        state,
    };
};

const mapDispatchToProps: MapDispatchToPropsParam<ActionCreator, any> = (dispatch: Dispatch<Action>): any => {
    return {
        actions: bindActionCreators(actions as any, dispatch),
    };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...stateProps, ...dispatchProps, ...ownProps };
};

export default function connectAllProps(Component: React.ComponentClass<any>) {
    return injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)));
}
