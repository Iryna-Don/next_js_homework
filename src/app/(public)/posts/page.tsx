import Link from "next/link";
import {getData} from "@/services/api.service";
import {IPost} from "@/models/IPost";

const Posts = async () => {
    try{
        const posts = await getData<IPost[]>('posts');
        return (
            <div>
                <h1>Posts</h1>
                {posts.map(post => <div key={post.id}><Link href={`/posts/${post.id}`}><b>ID: </b>{post.id} <b>Title: </b>{post.title}</Link></div>)}
            </div>
        );
    }
    catch(err){
        console.log(err);
        return <div>{String(err)}</div>
    }
};

export default Posts;