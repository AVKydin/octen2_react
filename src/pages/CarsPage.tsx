import React, { useEffect, useState } from 'react';
import { carService } from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import { ICarModel } from "../models/ICarModel";
import PaginationComponent from "../components/PaginationComponent";
import { useSearchParams } from "react-router-dom";

const CarsPage = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    const [carsPaginationObject, setCarsPaginationObject] = useState<ICarModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        carService.getAllCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginationObject(value);
            }
        });
    }, [query]);

    return (
        <div>
            <CarsComponent cars={carsPaginationObject.items} />
            <PaginationComponent
                setQuery={setQuery}
                next={carsPaginationObject.next}
                prev={carsPaginationObject.prev}
            />
        </div>
    );
};

export default CarsPage;
