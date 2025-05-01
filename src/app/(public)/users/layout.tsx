import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "All Users",
  description: "All Users Layout",
};

type Props = { children: ReactNode }
const UsersLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            UsersLayout content
            <hr/>
            <hr/>
            {children}
            <hr/>
        </div>
    );
};
export default UsersLayout;