import {IUser} from "@/models/IUser";
import {Metadata} from "next";
import {IdProps} from "@/models/IdProps";
import {getData} from "@/services/api.service";

export const generateMetadata = async ({params}: IdProps): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "User " + id
    }
}

const User = async ({params}: IdProps) => {
    const {id} = await params;
    if (Number.isNaN(+id)) {
        return <div>ID is not valid!</div>;
    }
    try {
        const {id: userId, name, email} = await getData<IUser>("users",id);
        return (
            <div>
                <h1>User Info</h1>
                <p><b>ID: </b> {userId}</p>
                <p><b>Name:</b> {name}</p>
                <p><b>Email:</b> {email}</p>
            </div>
        );
    } catch (e: unknown) {
        return <div>User not found or error fetching data. {String(e)}</div>;
    }
};

export default User;
