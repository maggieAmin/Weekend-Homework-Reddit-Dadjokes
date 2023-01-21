import PostItem from "./PostItem"

const PostList = ({posts}) => {
    return (
        <>
            {posts.map((post,index) => {
                return (
                    <PostItem post={post} key={index}/>
                )
            })}
        </>
    )
}

export default PostList