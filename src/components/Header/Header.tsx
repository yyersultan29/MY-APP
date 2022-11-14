import { FC } from "react";

import styles from './Header.module.css';
import icon from '../../assets/logo.png';

export const Header:FC = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderInner}>
                <img src = {icon} alt="icon"/>
                <div className={styles.Title}>
                    Welcome to Whinepad!
                </div>
            </div>
        </header>
    )
}