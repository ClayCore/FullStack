import { connect, MapStateToPropsParam, Provider } from 'react-redux';

const mapStateToProps: MapStateToPropsParam<any, any, any> = (
    state: any
): any => {
    const { locale, messages } = state.translations;
    return { locale, messages };
};

export default connect(mapStateToProps)(Provider);
