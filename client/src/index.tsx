import 'intl';
import 'intl/locale-data/jsonp/en';
import { $ } from '@flux/shared/utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { HOSTURL_DEV, HOSTURL_PROD } from '@flux/shared/hostUrls';
import fonts, { initFontLibrary } from './utils';
import { initStorage } from '@flux/shared/storage';
import { initToast } from '@flux/shared/toast';
import { Provider } from 'react-redux';
import { SET_LOCALE } from '@flux/shared/actions/common';
import { setHostUrl } from '@flux/shared/fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ConnectedIntlProvider from '@flux/shared/intl';
import moment from 'moment';
import StorageWrapper from './website/components/StorageWrapper';
import store from '@flux/shared/store';
import ToastWrapper from './website/components/ToastWrapper';
import App from './website/App';
import * as serviceWorker from './serviceWorker';

(function () {
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

    // Initializes icon fonts
    initFontLibrary();

    let onReady = function (callback: Function) {
        let intervalId = window.setInterval(function () {
            if ($('body') !== undefined) {
                window.clearInterval(intervalId);
                callback.call(onReady);
            }
        }, 1000);
    };

    let init = function () {
        window.addEventListener('load', function () {
            let entryPoint = $('#root');

            require('./website/styles/master.scss');

            onReady(function () {
                $('body')!.classList.add('loaded');
            });

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
        });
    };

    init();
})();
