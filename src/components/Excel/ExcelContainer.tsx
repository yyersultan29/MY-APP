import { FC, useReducer, useState } from "react"

import styles from './Excel.module.css';
import { IComponent, IState, TBook, TBookForm } from "../../types/types";
import { reducer } from "./reducer";
import { Excel } from "./Excel";
import { Modal } from "../Modal/Modal";
import { BookForm } from "../BookForm/BookForm";

const initalState: IState = {
    sort: null,
    sortBy: 'asc',
    books: [
        { id: '1', name: 'React', rating: 4, year: 2020 },
        { id: '2', name: 'Harry Potter', rating: 5, year: 2006 },
        { id: '3', name: 'Game of Thrones', rating: 5, year: 2018 },
        { id: '4', name: 'Lalalend', rating: 3, year: 2020 },
    ]
}

type TModalType = {
    data: TBookForm,
    type: string
}
const inital: TBook = {
    id: Date.now().toString(),
    name: '',
    year: 2020,
    rating: 0
}

export const ExcelContainer: FC = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    const [show, setShow] = useState<boolean>(false);
    const [modalType, setModalType] = useState<TModalType>({
        data: {} as TBookForm,
        type: 'add'
    })

    const main = (data: TBookForm) => {
        const finder = state.books.find(b => b.name === data.name);
        dispatch({ type: 'ADD_BOOK', payload: data });
        setShow(false)
    }

    const handleAction = (id: string, type: string) => {

        const data = state.books.find(book => book.id === id);
        data
            ? setModalType({ data, type })
            : setModalType({ data: inital, type });

        setShow(true);
    }
    const getComponent = (data: TBookForm, type: string): JSX.Element => {
        const Components: IComponent = {
            'info': <BookForm readonly initalDate={data} onSubmitForm={main} />,
            'update': <BookForm readonly={false} initalDate={data} onSubmitForm={main} />,
            'delete': <BookForm readonly initalDate={data} onSubmitForm={main} />,
            'add': <BookForm readonly={false} initalDate={{} as TBookForm} onSubmitForm={main} />,
        }
        return Components[type];
    }


    const Component = getComponent(modalType.data, modalType.type)
    return (
        <div className={styles.Excel}>
            {/* MODAL */}
            <Modal opened={show} onClose={() => setShow(false)}>
                {Component}
            </Modal>
            <div className={styles.addSearch}>
                <button onClick={() => handleAction('no', 'add')} className={styles.add}>
                    + Add
                </button>
                <input placeholder="Search" className={styles.search} />
            </div>
            <Excel handleAction={handleAction} state={state} />
        </div>
    )
}