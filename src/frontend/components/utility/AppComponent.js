import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AppComponent extends React.Component {
    notifySuccess (message) {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    notifyError (message) {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    renderToastContainer() {
        return <ToastContainer />;
    }
}