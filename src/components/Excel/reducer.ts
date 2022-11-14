import { Action } from "../../types/actionTypes";
import { IState, TBook } from "../../types/types";

export function reducer(state:IState,action:Action):IState  {
    switch(action.type){
        case 'ADD_BOOK':
            const data: TBook = {...action.payload,id: Date.now().toString()};
            return {
                ...state,
                books: [...state.books,data]
            }
        
        default: return state;
    }
}