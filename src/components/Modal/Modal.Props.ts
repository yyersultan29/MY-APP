import React from "react";

export interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode,
    isShow: boolean,
    setIsShow: (isShow: boolean) => void
}