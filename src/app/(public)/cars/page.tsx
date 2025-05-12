import React from 'react';
import {getAllCars} from "@/services/api.service";

const Cars = async () => {
    const cars = await getAllCars();
    return (
        <div>
            {cars.map(car => <p key={car.id}>{car.brand} {car.price}$ {car.year}</p>)}
        </div>
    );
};

export default Cars;