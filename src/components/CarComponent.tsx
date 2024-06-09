import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    car: ICarWithAuth
}

const CarComponent:FC<IProps> = ({car}) => {

    return (
        <div>
            <hr/>
            <p>{car.brand} - {car.year} - {car.price}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;
