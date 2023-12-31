import { Meta } from "@fetchingTypes/Meta";


export interface FetchingData<T> {
    data: T;
    meta?: Meta
}