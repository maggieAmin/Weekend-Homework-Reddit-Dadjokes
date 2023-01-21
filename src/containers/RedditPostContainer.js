import { useEffect } from "react"
import { useState } from "react"
import PostList from "../components/PostList"
import SearchForm from "../components/SearchForm"

const RedditPostContainer = () => {
    const [posts, setPosts] = useState([])

    const [searchText, setSearchText] = useState("")

    const handleChange =function(event) {
        setSearchText(event.target.value)
    }

    const searchedPosts = (posts, searchText) => {
        return posts.filter((post) => post.title.includes(searchText) || post.text.includes(searchText))
        

    }

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = function(){
        fetch('https://www.reddit.com/r/dadjokes.json')
        .then(res => res.json())
        .then(res => res.data.children.map(post => ({title: post.data.title, text: post.data.selftext})))
        .then(posts => setPosts(posts))
    }

    return (
        <div>
            <SearchForm searchText={searchText} handleChange={handleChange}/>
            <PostList posts={searchedPosts(posts,searchText)}/>
        </div>
    )
}

export default RedditPostContainer