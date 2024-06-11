import React, { FC } from 'react';
import { IPaginatedPageModel } from "../models/IPaginatedPageModel";
import { URLSearchParamsInit } from "react-router-dom";

interface IProps {
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
    setQuery: (nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean | undefined; state?: any; }) => void;
}

const PaginationComponent: FC<IProps> = ({ prev, next, setQuery }) => {

    const onChangePage = (action: string) => {
        switch (action) {
            case "prev":
                if (prev) setQuery({ page: prev.page });
                break;
            case "next":
                if (next) setQuery({ page: next.page });
                break;
        }
    };

    return (
        <div>
            <button onClick={() => onChangePage('prev')} disabled={!prev}>prev</button>
            <button onClick={() => onChangePage('next')} disabled={!next}>next</button>
        </div>
    );
};

export default PaginationComponent;
