import React from 'react';
import * as Style from './style.module.css';

export const Modal = ({title, children}) => {

    return (
        <div className={Style.modal}>
            <div className={Style.modalContant}>
                <h1>{title}</h1>
                <p>{children}</p>
            </div>
        </div>
    );
};

export default Modal;