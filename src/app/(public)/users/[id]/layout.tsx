import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "UserIdLayout Metadata",
  description: "User Id Layout",
};

type Props = { children: ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            UserLayout content
            {children}
            <hr/>
        </div>
    );
};
export default UserLayout;