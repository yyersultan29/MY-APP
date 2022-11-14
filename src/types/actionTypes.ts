import { TBookForm } from "./types";

export type Action = 
| {type: 'SORT_BY',payload: string}
| {type: 'ADD_BOOK',payload: TBookForm}