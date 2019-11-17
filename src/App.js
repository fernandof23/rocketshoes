import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import './config/ReacotronConfig'
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './component/Header';
import store from './store/index';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={2000} />
            </BrowserRouter>
        </Provider>
    );
}
