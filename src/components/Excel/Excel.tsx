import { FC } from "react";

import { IState } from "../../types/types";
import { ExcelItem } from "./ExcelItem";
import styles from './Excel.module.css';

type Props = {
    state: IState,
    handleAction: (id:string,type: string) => void
}
export const Excel:FC<Props> = ({state,handleAction}) => {
    
    const {sortBy,sort,books}  = state;
    console.log(state);
    
    return(
        <table className={styles.Table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <ExcelItem key={book.id} handleAction={handleAction} book={book}/>
                ))}
            </tbody>
        </table>
    )
}