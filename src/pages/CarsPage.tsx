import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarWithAuth} from "../models/ICarWithAuth";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuth[]>([])

        useEffect(() => {
                carService.getAllCars().then(value => {
                    if (value) {
                        setCars(value.items)
                    }
                })
        }, []);


    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;
