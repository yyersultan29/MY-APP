import { FC } from "react";

import { TBook } from "../../types/types";
import styles from './Excel.module.css';

type Props = {
    book: TBook,
    handleAction: (id:string,type: string) => void
}

export const ExcelItem:FC<Props> = ({book,handleAction}) => {
    const onClickInfo = () => handleAction(book.id,'info')
    const onClickUpdate = () => handleAction(book.id,'update')
    const onClickDelete = () => handleAction(book.id,'delete')
    return(
        <tr>
            <td>{book.name}</td>
            <td>{book.year}</td>
            <td>{book.rating}</td>
            <td className={styles.btnGroup}>
                <button onClick={onClickInfo}>Info</button>
                <button onClick={onClickUpdate}>Update</button>
                <button onClick={onClickDelete}>Delete</button>
            </td>
      </tr>
    )
   
}