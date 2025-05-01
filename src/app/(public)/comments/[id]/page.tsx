import {IdProps} from "@/models/IdProps";
import {IComment} from "@/models/IComment";
import {Metadata} from "next";
import {getData} from "@/services/api.service";

export const generateMetadata = async ({params}: IdProps): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "Comment " + id
    }
}


const Comment = async ({params}: IdProps) => {
    try{
        const {id} = await params;
        const {id:commentId, body} = await getData<IComment>('comments', id);
        return (
            <div>
                <h1>Comment Info</h1>
                <p><b>ID: </b>{commentId}</p>
                <p><b>Body: </b> {body}</p>
            </div>
        );

    } catch (error) {
        console.error(error);
        return <div>{String(error)}</div>;
    }
};

export default Comment;