import { connect, MapStateToPropsParam } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

const mapStateToProps: MapStateToPropsParam<any, any, any> = (
    state: any
): any => {
    const { locale, messages } = state.translations;
    return { locale, messages };
};

export default connect(mapStateToProps)(I18nextProvider);
