import React from 'react';
import {getAllCars} from "@/services/api.service";
import Car from "@/components/car/Car";
import s from "@/components/car/car.module.css"


const Cars = async () => {
    const cars = await getAllCars();
    return (
        <div className={s.blockWithCars}>
            {cars.map(car => <Car key={car.id} car={car}></Car>)}
        </div>
    );
};

export default Cars;