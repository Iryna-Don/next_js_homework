import Link from "next/link";
import {IUser} from "@/models/IUser";
import {getData} from "@/services/api.service";

        const Users = async () => {
            try {
                const users = await getData<IUser[]>("users");
                return (
                    <div>
                        {users.map((user) => (
                            <div key={user.id}>
                                <Link  href={`/users/${user.id}`}>{user.name}</Link>
                            </div>
                        ))}
                    </div>
                );


            } catch (e:unknown) {
                console.error(e);
                return <div>{String(e)}</div>
            }
        };


export default Users;
