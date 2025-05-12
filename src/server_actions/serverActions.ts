"use server";

import {createCar} from "@/services/api.service";

export const AddCar = async (formData: FormData) => {
    try {
        await createCar(formData);
    } catch (error) {
        console.error("Помилка при додаванні машини:", error);
    }
};
