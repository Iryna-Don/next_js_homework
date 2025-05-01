import {Metadata} from "next";
import {IPost} from "@/models/IPost";
import {IdProps} from "@/models/IdProps";
import {getData} from "@/services/api.service";

export const generateMetadata = async ({params}: IdProps): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "Post " + id
    }
}

const Post = async ({params}: IdProps) => {
    try{
        const {id} = await params;
        const post = await getData<IPost>('posts', id);
        return (
            <div>
                <h1>Post Info</h1>
                <p><b>ID: </b> {post.id}</p>
                <p><b>Title:</b> {post.title}</p>
            </div>
        );

    } catch (error: unknown) {
        console.error(error);
        return <div>{String(error)}</div>;
    }
};

export default Post;