import React from "react";
import { TBookForm } from "../../types/types";

export interface BookFormProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    initalDate: TBookForm ,
    onSubmitForm: (data: TBookForm) => void,
    readonly: boolean
}