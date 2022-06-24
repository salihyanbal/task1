export interface ResponseListModel<T>{
    count: number,
    next: string,
    previous: string,
    results: T[]
}