import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";

interface IProps {
    onChangePage: (action: string) => void;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
}

const PaginationComponent:FC<IProps> = ({onChangePage, prev, next}) => {

    return (
        <div>
            <button onClick={() => {
                onChangePage('prev')
            }} disabled={!prev}>prev</button>
            <button onClick={() => {
                onChangePage('ne[t')
            }} disabled={!next}>next</button>
        </div>
    );
};

export default PaginationComponent;
