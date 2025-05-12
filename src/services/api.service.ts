import axios from "axios";
import { ICar } from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL: "http://185.69.152.209/carsAPI/v1",
});

export const getAllCars = async (): Promise<ICar[]> => {
    const response = await axiosInstance.get<ICar[]>("/cars");
    return response.data;
};
