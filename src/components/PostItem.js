import { Card, CardContent, CardHeader } from "@mui/material"

const PostItem = ({post}) => {
    return (
            <Card variant="outlined">
                <CardHeader title={post.title}/>
                <CardContent>{post.text}</CardContent>
            </Card>
    )
}

export default PostItem