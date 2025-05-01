import {IComment} from "@/models/IComment";
import Link from "next/link";
import {getData} from "@/services/api.service";

const Comments = async () => {
    try{
        const comments = await getData<IComment[]>('comments');
        return (
            <div>
                <h1>Comments</h1>
                {comments.map((comment) => <div key={comment.id}><Link href={`/comments/${comment.id}`}><b>ID: </b>{comment.id} <b>Body: </b>{comment.body}</Link></div>)}
            </div>
        );

    }catch (e){
        console.log(e);
        return <div>{String(e)}</div>;
    }
};

export default Comments;