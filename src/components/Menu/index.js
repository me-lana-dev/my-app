import React, {useState} from 'react';
import * as Style from './style.module.css';
import Modal from '../Modal';

function Menu() {

    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <nav className={Style.menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a onClick={() => setIsShow(true)}>Login</a></li>
            </nav>
            {isShow&&
                <Modal title={"Login"}>
                    Какой-нибудь текст
                    <button onClick={() => setIsShow(false)}>Закрыть</button>
                </Modal>
            }
        </>
    );
}

export {Menu};