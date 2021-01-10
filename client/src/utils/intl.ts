import { connect, MapStateToPropsParam } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import AppState from '@flux/shared/models/Client/AppState';

const mapStateToProps: MapStateToPropsParam<any, any, any> = (
    state: AppState
): any => {
    const { locale, messages } = state.translations;
    return { locale, messages };
};

export default connect(mapStateToProps)(I18nextProvider);
