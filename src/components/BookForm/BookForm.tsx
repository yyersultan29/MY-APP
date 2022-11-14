import React, { FC, memo, useEffect, useState } from "react";

import styles from './BookForm.module.css';
import { BookFormProps } from "./BookForm.Props";
import { TBookForm } from "../../types/types";



export const BookForm:FC<BookFormProps> = memo(({initalDate,onSubmitForm,readonly=false}) => {
    
    
    const [state,setState] = useState(initalDate);
    useEffect(() => {
        if(initalDate.name){
            setState(initalDate);
        }else{
            setState({
                name:'',
                year: 2022,
                rating: 0
            })
        }
    },[initalDate])
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(state as TBookForm);
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    console.log(state);
    
    
    return (
        <div className={styles.Container}>
            <form className={styles.Form} onSubmit={handleSubmit}>
                {/* NAME */}
                <div className={styles.FormItem}>
                    <div>Name</div>
                    <input value={state.name} onChange={handleChange} type="text" name="name"/>
                </div>
                {/* Year */}
                <div className={styles.FormItem}>
                    <div>Year</div>
                    <input value={state.year} onChange={handleChange} type="number" name="year"/>
                </div>
                {/* Rating */}
                <div className={styles.FormItem}>
                    <div>Rating</div>
                    <input value={state.rating} onChange={handleChange} min="0" type="number" name="rating"/>
                </div>
                {/* Submit */}
                <button disabled={readonly} type="submit">Submit</button>
            </form>
        </div>
    )
})