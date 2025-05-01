import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "All Comments",
  description: "CommentsLayout",
};

type Props = { children: ReactNode }
const CommentsLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            CommentsLayout content
            {children}
            <hr/>
        </div>
    );
};
export default CommentsLayout;