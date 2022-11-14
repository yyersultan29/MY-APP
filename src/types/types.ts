export type TBook = {
    id: string,
    name: string,
    year: number,
    rating: number,
}
export interface IState  {
    sort: null | string,
    sortBy:string,
    books: TBook[]
}

export type TBookForm  = {
    name: string,
    year: number,
    rating: number
}   

export interface IComponent {
    [key:string ] : JSX.Element
}