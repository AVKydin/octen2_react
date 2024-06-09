import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;
