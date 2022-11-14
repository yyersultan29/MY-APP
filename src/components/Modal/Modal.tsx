import { FC } from "react";

import cn from "classnames";

import styles from './Modal.module.css';
import { ModalProps } from "./Modal.Props";

export const Modal:FC<ModalProps> = ({setIsShow,isShow,children}) => {
    const closeModal = () => setIsShow(false)
    return (
        <div className={cn(styles.modal, {
            [styles.open]: isShow,
            [styles.close]: !isShow
        })}>
            <div className={styles.modal__area} onClick={closeModal} />

            <div className={styles.modal__body}>
                <div className={styles.modal__content}>
                    {children}
                </div>
            </div>
        </div>
    )
}