import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarModel {
    total_items: number;
    total_pages: number;
    prev:	string;
    next:	string;
    items:	ICarWithAuth[]
}
