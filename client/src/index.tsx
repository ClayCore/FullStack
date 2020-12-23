import { $ } from '@flux/shared/utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { HOSTURL_DEV, HOSTURL_PROD } from '@flux/shared/hostUrls';
import { initFontLibrary } from './utils';
import { initStorage } from '@flux/shared/storage';
import { initToast } from '@flux/shared/toast';
import { Provider } from 'react-redux';
import { SET_LOCALE } from '@flux/shared/actions/common';
import { setHostUrl } from '@flux/shared/fetch';
import * as serviceWorker from './serviceWorker';
import App from './website/App';
import ConnectedIntlProvider from '@flux/shared/intl';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import StorageWrapper from './website/components/StorageWrapper';
import store from '@flux/shared/store';
import ToastWrapper from './website/components/ToastWrapper';

// Polyfill promise if it's undefined
if (typeof document === 'undefined') {
    Promise = require('bluebird');
}

// This has to be set for fetching to work
const ENV = process.env.NODE_ENV;
if (ENV === 'development') {
    setHostUrl(HOSTURL_DEV);
} else {
    setHostUrl(HOSTURL_PROD);
}

// Initialize the locale and translations
store.dispatch({
    type: SET_LOCALE,
    locale: navigator.language,
});
moment.locale(navigator.language);

// Initialize toast notifications and local storage
initToast(new ToastWrapper(store));
initStorage(StorageWrapper);

(function () {
    // This will make sure that DOM is loaded.
    let onReady = function (callback: Function) {
        let intervalId = window.setInterval(function () {
            if ($('body') !== undefined) {
                window.clearInterval(intervalId);
                callback.call(onReady);
            }
        }, 1000);
    };

    // Add all the styles
    require('./website/styles/master.scss');

    // Initializes icon fonts
    initFontLibrary();

    onReady(function () {
        $('body')!.classList.add('loaded');
    });

    // start rendering
    let entryPoint = $('#root');
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedIntlProvider>
                <Router>
                    <App />
                </Router>
            </ConnectedIntlProvider>
        </Provider>,
        entryPoint
    );

    serviceWorker.unregister();
})();
