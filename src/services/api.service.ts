import axiosInstance from "@/services/axiosInstance";

export const getData = async <T>(endpoint:string, id?:string) => {
    if(!id){
        const response = await axiosInstance.get<T>(
            `/${endpoint}`,
        );
        return response.data;
    }
    const response = await axiosInstance.get<T>(
        `/${endpoint}/${id}`,
    );
    return response.data;
}