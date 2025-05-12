"use server";

import {axiosInstance} from "@/services/api.service";

export const AddCar = async (formData: FormData) => {
    try {
        await axiosInstance.post("/cars", formData);
    } catch (error) {
        console.error("Помилка при додаванні машини:", error);
    }
};
