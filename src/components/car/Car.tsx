import React, {FC} from 'react';
import {ICar} from "@/models/ICar";
import s from "./car.module.css"

type CarProps = {
    car: ICar;
}
const Car: FC<CarProps> = ({car}) => {
    return (
        <div className={s.carCard}>
            <p>{car.brand}</p>
            <p>{car.price}$</p>
            <p>{car.year}</p>
        </div>);
};

export default Car;