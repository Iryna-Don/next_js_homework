import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "All Posts",
  description: "All Posts Layout",
};

type Props = { children: ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <div>
            <hr/>
            PostsLayout content
            {children}
            <hr/>
        </div>
    );
};
export default PostsLayout;