import { FC } from "react";

import { ModalProps } from "./Modal.Props";
import { Portal } from "../Portal/Portal";
import { useMount } from "./hook/useMount";
import { Layout } from "./layout/Layout";

export const Modal: FC<ModalProps> = ({ opened, onClose, children, ...restProps }) => {

    const { mounted } = useMount({ opened });

    if (!mounted) {
        return null;
    }

    return (
        <Portal>
            <Layout opened={opened} onClose={onClose} {...restProps}>
                {children}
            </Layout>
        </Portal>
    )
}